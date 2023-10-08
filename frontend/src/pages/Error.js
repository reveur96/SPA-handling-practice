import { useRouteError } from 'react-router-dom'
import PageContents from '../components/PageContent'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () =>
{
  const error = useRouteError()

  let title = 'An error occurred!'
  let message = 'Something went wrong!'

  if (error.status === 500)
  {
    message = error.data.message
  }

  if (error.status === 404)
  {
    title = 'Not found!'
    message = 'Could not find resource or page.'
  }

  return (
    <>
      <MainNavigation/>
      <PageContents title={title}>
        <p>{message}</p>
      </PageContents>
    </>
  )
}
export default ErrorPage