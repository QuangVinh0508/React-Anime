import React from 'react'
import { useParams } from 'react-router-dom'

function AnimeDetail() {
  const [product, setProduct] = React.useState(null);
  const params = useParams();
  const productId = params.id;


  React.useEffect(() => {
    async function fetchProduct() {
      // call api

      // setProduct(data) 
    }
    fetchProduct();
  }, [productId])

  console.log('AnimeDetail', {
    product,
    productId
  })

  return (
    <div  className='container'>AnimeDetail</div>
  )
}

export default AnimeDetail