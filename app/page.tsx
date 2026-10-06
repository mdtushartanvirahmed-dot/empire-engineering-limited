import { CompanySite } from "../components/company-site"
import { OrganizationSchema } from "./components/organization-schema"

export default function Page() {
  return (
    <>
      <OrganizationSchema />
      <CompanySite />
    </>
  )
}