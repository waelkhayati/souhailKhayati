export  const sendContactForm = async (data:any) => fetch('/api/book', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body: JSON.stringify(data),
})