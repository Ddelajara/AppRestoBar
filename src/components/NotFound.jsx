import ErrorFound from '../../public/image/404.png'

export const NotFound = () => {
  return (
    <div className="centered-404">
        <img src={ErrorFound} alt="404" />
    </div>
  )
}
