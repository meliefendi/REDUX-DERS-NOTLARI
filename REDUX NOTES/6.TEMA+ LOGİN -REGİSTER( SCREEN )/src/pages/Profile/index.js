import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../../redux/themeSlice";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());

        navigate("../signup")
    };

    // user değeri null ise, kullanıcı giriş yapmamış demektir.
    if (!user) {
        return null; // veya istediğiniz bir mesajı veya yönlendirmeyi döndürebilirsiniz.
    }

    return (
        <div>
            <h1>Welcome <span>{user.name}- {user.email} </span></h1>
            <br />
            <Button onClick={(e) => handleLogout(e)}>Logout</Button>
        </div>
    );
}

export default Profile;
