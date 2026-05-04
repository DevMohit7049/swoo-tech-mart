/** Only non-sensitive profile fields belong in storage — auth uses HttpOnly cookies. */

const USER_DETAILS_KEY = "swoo_current_user_details";

export function safeGetStorageItem(key, defaultValue = null) {
  try {
    const value =
      sessionStorage.getItem(key) ?? localStorage.getItem(key);

    return value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    console.error(`Error reading storage key "${key}":`, e);
    return defaultValue;
  }
}

function sanitizeUserForStorage(user) {
  if (!user || typeof user !== "object") return user;
  const {
    token,
    accessToken,
    refreshToken,
    password,
    ...rest
  } = user;
  return rest;
}

/** Persist logged-in profile for UI hydrate only (no JWT). */
export function persistUserDetails(user) {
  if (!user) return;
  try {
    const safe = sanitizeUserForStorage(user);
    localStorage.setItem(USER_DETAILS_KEY, JSON.stringify(safe));
  } catch (e) {
    console.error("Error saving user details:", e);
  }
}

export function getStoredUserDetails() {
  try {
    const raw = localStorage.getItem(USER_DETAILS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading stored user:", e);
    return null;
  }
}

/** Clear persisted profile (cookies cleared by backend on logout). */
export function removeAuthSession() {
  try {
    localStorage.removeItem(USER_DETAILS_KEY);
    sessionStorage.removeItem("currentUser");
  } catch {
    /* ignore */
  }
}

/** Convenience read — never includes JWT; cookies handle auth after refresh */
export function getCurrentUser() {
  const user = getStoredUserDetails();
  if (!user) return null;
  return {
    userId: user._id ?? user.id,
    role: user.role,
    user,
  };
}
