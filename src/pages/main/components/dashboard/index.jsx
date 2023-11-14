import { useEffect } from "react";
import { useApiCaller } from "../../../../services/apiCommon";
import { useSelector } from "react-redux";
import { selectData } from "../../../../redux/reducers/userSlice";

function Index() {
  const apiCaller = useApiCaller();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configAPI = {
          url: "https://bedtidev.quangnam.gov.vn/api/me",
          method: "GET",
          data: {},
          params: {},
          isShowMessage: true,
        };

        const getName = "user";

        const response = await apiCaller(configAPI, getName);
        console.log(response.user);
        // Xử lý dữ liệu response
      } catch (error) {
        console.error(error);
        // Xử lý lỗi
      }
    };

    fetchData();
  }, []);

  const data = useSelector(selectData);
  const user = data.user;
  const dataUser = user?.user;
  return (
    <div>
      <h3>{dataUser?.hoVaTen}</h3>
      <p>{dataUser?.emails}</p>
      <p>{dataUser?.hoVaTen}</p>
    </div>
  );
}

export default Index;
