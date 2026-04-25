import PageHeader from "../components/PageHeader"
import ErrorPage from "../components/ErrorPage"

export default function ErrorStatus({ code, description, image }) {
  return (
    <div className="space-y-5">
      <PageHeader
        title={`Error ${code}`}
        breadcrumb={["Dashboard", "Errors", `Error ${code}`]}
      />
      <ErrorPage code={code} description={description} image={image} />
    </div>
  )
}
