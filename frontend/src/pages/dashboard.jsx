import { useEffect } from "react";

const CLIENT_ID = "77c38hgamhj9ur";
const REDIRECT_URI = "http://localhost:5173/dashboard";
const SCOPE = "openid profile email w_member_social";

function Dashboard() {
    useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      console.log("Authorization code:", code);
    }
  }, []);
  const handleLinkedInLogin = () => {
    const linkedInURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPE)}`;

    window.location.href = linkedInURL;
  };

  return (
    <>
      <h1>Dashboard</h1>

      <button
        className="bg-black text-white p-4 rounded-lg cursor-pointer"
        onClick={handleLinkedInLogin}
      >
        LinkedIn
      </button>
    </>
  );
}

export default Dashboard;
