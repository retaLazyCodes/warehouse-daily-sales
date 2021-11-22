import MaterialTable from 'material-table'
import swal from 'sweetalert2'
import { tableIcons } from '../icons'

function ProductsTable({ products }) {
    console.log(products)

    const options = () => {
        return `<option value="" selected disabled>-- Seleccione la categoría --</option>
  <option value="1">Category 1</option>
  <option value="2">Category 2</option>`
    }

    async function showModal() {

        const { value: formValues } = await swal.fire({
            title: 'Crear producto',
            showCancelButton: true,
            html: `Nombre:<br/><input id="swal-input1" class="swal2-input">
            <br/><br/>
                    Descripción:<input id="swal-input2" class="swal2-input">
            <br/><br/>
      Categoría: <select id="swal-input3" class="swal2-select">${options()}</select>`,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value,
                    document.getElementById('swal-input3').value
                ]
            }
        })

        if (formValues) {
            console.log(formValues)
            swal.fire(JSON.stringify(formValues))
        }
    }

    showModal()

    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTable
                columns={[
                    { title: 'Nombre', field: 'name' },
                    { title: 'Descripción', field: 'description' },
                    { title: 'Precio', field: 'sale_price' },
                    { title: 'Stock', field: 'stock' }
                ]}
                data={products}
                title="Lista de Productos"
                icons={tableIcons}
            />
        </div>
    )

}

export default ProductsTable