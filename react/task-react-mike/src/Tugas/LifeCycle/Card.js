const Komponen = () => {

  function apiRespon() {
    axios.get(this.state.url)
    .then(response => {
        render(response.data)
    })
    .catch(err => {
        console.log(err.message)
    })
}

export default Komponen;