
import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import { ButtonTest } from '../../styled'
import { UserCard } from "./card";
import { IUser } from "../../types/user";

const users: IUser[] = [
  { name: 'jim', age: 27, occupation: 'poet' },
  { name: 'kim', age: 29, occupation: 'poet' },
  { name: 'robby', age: 30, occupation: 'poet' },
]

export const User = () => {
  return (
    <Container>
      <h1>
        <ButtonTest>
          click me
        </ButtonTest>
        User page
      </h1>
      <Button variant='contained'>check</Button>
      {users.map(user => <UserCard user={user} />)}
    </Container>
  )
}
