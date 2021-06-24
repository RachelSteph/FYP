import { AddShoppingCartOutlined } from "@material-ui/icons";
import axios from "axios";

const authAxios = axios.create({
    baseURL: AddShoppingCartOutlined,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})


//in code to acquire data example

/*const [users, setUsers] = useState([]);
const [requestError, setRequestError] =useState();

    const fetchData = useCallback(async () ) => {
        try{
            const results = await.authAxios.get{`${apiUrl}/users/all`};
            setUsers(result.data)
        }
    }

//example
<Button onClick={() => fetchData()}>Get users</Button>
{users.map(user => {
    return <p key={user.id}>{user.name}</p>
})}*/