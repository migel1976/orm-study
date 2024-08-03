import { UserCardStyle, UserCardContent } from "../../styled"
// import Card from "@mui/material/Card"
// import CardContent from "@mui/material/CardContent"
import { Typography, Card, CardContent } from "@mui/material"
import { IUser } from "../../types/user"
interface IUserProps {
  user: IUser
}

// export const CommentEntry: React.FC<CommentProps> = ({ comment }: CommentProps) => {
export const UserCard: React.FC<IUserProps> = ({ user }: IUserProps) => {
  return (
    <UserCardStyle>
      <Card>
        <UserCardContent>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            {user.name}
            {user.age}
            {user.occupation}
          </CardContent>
        </UserCardContent>
      </Card>
    </UserCardStyle>

  )
}
