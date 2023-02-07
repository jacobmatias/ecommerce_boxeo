import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
    
import CardWidget from "./CardWidget"


const NavBar = () => {
  return (
<div>
 
 <h1>BALBOA'S BOXING GLOVES</h1>
 <br />
<Breadcrumb>
  <BreadcrumbItem ml="470px" mt="auto">
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Guantes</BreadcrumbLink>
  </BreadcrumbItem>
  

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Indumentaria</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
<CardWidget/>  

</div>
  );
}

export default NavBar