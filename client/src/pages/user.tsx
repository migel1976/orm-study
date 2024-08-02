import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import {ButtonTest} from '../styled'

const User = () => {
  return (
    <Container>
      <h1>
      <ButtonTest>
      click me 
      </ButtonTest>
        User page
      </h1> 
      <Button variant='contained'>check</Button> </Container>
  )
}
export default User;
