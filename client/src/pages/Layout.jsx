import { Children } from "react"
import Container from "react-bootstrap/esm/Container"
function Layout({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Layout;
