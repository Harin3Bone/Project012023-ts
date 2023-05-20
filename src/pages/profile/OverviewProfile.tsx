import { useNavigate } from "react-router-dom";

//store
import useProfileStore from "store/profile/profile.store";

//constraint
import { USER_DETAIL_LIST } from "src/constraint/USER_DETAIL_LIST";

//component
import ButtonMultipurpose from "components/button/ButtonMultipurpose";

function OverviewProfile() {
  const navigate = useNavigate();

  const user = useProfileStore((state) => state.user);

  return (
    <div className='min-h-screen'>
      <h1 className='text-4xl mb-12'>User account overview</h1>
      <div className='mb-12'>
        <h3 className='text-2xl mb-6'>Profile</h3>
        <table className='table table-auto w-full overflow-hidden'>
          <tbody>
            {USER_DETAIL_LIST.map((detail,index) => (
              <tr key={index}>
                <td className='w-1/2 border-b border-gray-500 pl-4 py-4 text-gray-500'>{detail.label}</td>
                <td className='w-1/2 border-b border-gray-500 pr-4 py-4 text-ellipsis'>{eval(detail.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonMultipurpose type='button' onClick={() => navigate("/account/edit-profile")}>
        Edit profile
      </ButtonMultipurpose>
    </div>
  );
}

export default OverviewProfile;
//eval() ใช้ในการประมวลผลโค้ด JavaScript เป็นสตริง และคืนค่าผลลัพธ์ของการประมวลผลนั้น
//ตัวอย่างเช่น: result = eval("x + y")