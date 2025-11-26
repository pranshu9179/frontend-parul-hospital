import { FiLogOut, FiBell, FiSearch, FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentUser, logoutUser } from "../../Redux/users/usersThunks"; // 👈 Thunks import
import { useNavigate } from "react-router-dom";

const Header = ({ openMobileSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.user); // 👈 Redux user state

  // Fetch current user on mount
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      // await dispatch(logoutUser()).unwrap();
      localStorage.removeItem('user');

      navigate("/login"); // 👈 Redirect to login page
    } catch (err) {
      console.error("Logout Failed:", err);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={openMobileSidebar}
            className="p-2 rounded-md bg-[#00A297] text-white hover:bg-[#00897b]"
          >
            <FiMenu size={24} />
          </button>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xs hidden sm:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#00A297] focus:border-[#00A297] sm:text-sm"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-4 flex items-center space-x-4">
          {/* Notification */}
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A297]">
            <FiBell size={20} />
          </button>

          {/* Current User Info */}
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : user ? (
            <div className="flex flex-col items-center space-x-2">
              <img
                src={user.avatar || "https://img.freepik.com/premium-photo/3d-render-man-doctor-avatar-round-sticker-with-cartoon-character-face-user-id-thumbnail-modern_1181551-95.jpg"} // 👈 fallback image
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
              />
              <span className="text-gray-700 font-medium">{user.name}</span>
            </div>
          ) : (
            <span className="text-gray-500">Admin</span>
          )}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <FiLogOut className="mr-1" size={16} /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
