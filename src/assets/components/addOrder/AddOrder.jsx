import './AddOrder.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import Swal from 'sweetalert2';
import { addOrder } from '../../../firebase';
import Spinner from "../spinner/Spinner";

export default function AddOrder () {

  const { cart, clearCart, calculateTotal } = useContext(CartContext);
  const [loading, setLoading] = useState(null);
  const totalAmount = calculateTotal();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
  
    if (!name || !email) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
        icon: "warning",
        confirmButtonColor: "#e31a52",
      });
      return;
    }
  
    if (cart.length === 0) {
      Swal.fire({
        title: "Error",
        text: "No hay productos en el carrito.",
        icon: "warning",
        confirmButtonColor: "#e31a52",
      });
      return;
    }
  
    setLoading(true);
  
    const orderData = {
      items: cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.quantity * item.price
      })),
      total: totalAmount,
      date: new Date(),
      customer: { name, email }
    };
  
    try {
      const orderId = await addOrder(orderData);
      setLoading(false);
  
      Swal.fire({
        title: "Compra Confirmada",
        html: `Tu orden ha sido registrada con ID: <br><strong>${orderId}</strong>`,
        icon: "success",
        confirmButtonColor: "#e31a52",
      });
  
      clearCart();

    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar tu compra.",
        icon: "error",
        confirmButtonColor: "#e31a52",
      });
    }
  };
  

  return (
    <div className="container containerTag">
      <div className="row">
        <div className="col-12">
          <div className="containerOrder containerForm">
            <h2>Resumen de compra</h2>
            {cart?.length > 0 ? (
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr className='table-info'>
                      <th scope="col">Producto</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">SubTotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(cartProduct => (
                      <tr key={cartProduct.id}>
                        <td>{cartProduct.name}</td>
                        <td>{cartProduct.quantity}</td>
                        <td>${(cartProduct.price * cartProduct.quantity).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <p>No hay productos en el carrito</p>
                <Link to={'/'} className="btn btn-secondary">Volver</Link>
              </>
            )}
            <div className="lineDiv"></div>
            <h4>Total: {totalAmount.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className='form-label'>Nombre:</label>
                <input type="text" name='name' className='form-control' />
                
                <label htmlFor="email" className='form-label'>Email:</label>
                <input type="email" name='email' className='form-control' />

                {loading ? (
                    <Spinner/>
                ) : (
                    <button type='submit' className='btn buttonPrincipal'>Confirmar</button>
                )}

                <Link to={'/carrito'}><button className='btn btn-secondary'>Volver</button></Link>
                </form>

          </div>
        </div>
      </div>
    </div>
  );
}
