import { useEffect, useState } from "react";
import { getProfileApi } from "../util/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getProfileApi();
        setProfile(data.user);
      } catch (err) {
        const msg = err?.message || "Không lấy được profile";
        setError(msg);
      }
    })();
  }, []);

  return (
    <div className="card">
      <h2>Profile</h2>
      {error && (
        <div className="muted" style={{ color: "red" }}>
          {error}
        </div>
      )}

      {profile ? (
        <div>
          <p>
            <strong>ID:</strong> {profile.id}
          </p>
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Role:</strong> {profile.role}
          </p>
        </div>
      ) : (
        !error && <div className="muted">Đang tải...</div>
      )}
    </div>
  );
}
