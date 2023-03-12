import { Spinner } from 'react-spinners'

const Loader = () => {
  return (
    <div className="sweet-loading relative m-auto">
      <Spinner
        size={500}
        color={'#FFF'}
        loading={true}
      />
    </div>
  )
}

export default Loader
