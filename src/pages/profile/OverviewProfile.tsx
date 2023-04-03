import { useNavigate } from "react-router-dom";

//store
import useProfileStore from "store/profile/profile.store";

//component
import ButtonMultipurpose from "components/button/ButtonMultipurpose";

function OverviewProfile() {
  const navigate = useNavigate();

  const user = useProfileStore((state) => state.user);

  return (
    <div>
      <h1 className='text-4xl mb-12'>User account overview</h1>
      <div className='mb-12'>
        <h3 className='text-2xl mb-6'>Profile</h3>
        <table className='table table-auto w-full'>
          <tbody>
            <tr>
              <td className='w-1/2 border-b border-gray-500 px-4 py-4 text-gray-500'>Username</td>
              <td className='w-1/2 border-b border-gray-500 px-4 py-4'>{user?.username}</td>
            </tr>
            <tr>
              <td className='w-1/2 border-b border-gray-500 px-4 py-4 text-gray-500'>Email</td>
              <td className='w-1/2 border-b border-gray-500 px-4 py-4'>{user?.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ButtonMultipurpose
        type="button"
        onClick={() => navigate("/account/edit-profile")}
      >
        Edit profile
      </ButtonMultipurpose>
    </div>
  );
}

export default OverviewProfile;
