import { RouterProvider } from 'react-router-dom';
import router from './routes'
import { OrderProvider } from './utils/OrderContext';



const App = () => {
  return (
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  )
}

export default App
