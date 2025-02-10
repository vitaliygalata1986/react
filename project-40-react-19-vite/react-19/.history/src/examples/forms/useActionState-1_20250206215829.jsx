import { useState, useActionState } from 'react';

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemID');
  if (itemID === '1') {
    return 'Added to cart';
  } else {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return "Couldn't add to cart: the item is sold out.";
  }
}

function AddToCartForm({ itemID, itemTitle }) {
  const [message, formAction, isPending] = useActionState(addToCart, null);
  return (
    <form action={formAction}>
      <h2>{itemTitle}</h2>
      <input type='hidden' name='itemID' value={itemID} />
      <button type='submit'>Add to Cart</button>
      {isPending ? 'Loading...' : message}
    </form>
  );
}

function App() {


  return (
    <>
      <h2 className='fs-3 mb-5'>
        useActionState <small className='fw-lighter'>useActionState()</small>
      </h2>
      <form action={formAction} className='card shadow p-3'>
        {state?.success && showSuccess(state.successMessage)}
        <label className='form-label'>Enter name</label>
        <input className='form-control mb-3' name='name' />
        <button className='btn btn-dark' disabled={isPending}>
          Update
        </button>
        {state?.success === false && <p>{state.errorMessage}</p>}
      </form>
    </>
  );
}

export default App;

// 28-00
