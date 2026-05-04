import { useEffect, useMemo, useState } from "react";
import {
    setUsersLoading,
    setUsers,
    setUsersError,
    replaceUser,
    removeUser,
} from "@/store/auth/userSlice";
import {
    fetchAdminUsersApi,
    toggleUserRoleApi,
    toggleBlockUserApi,
    deleteAdminUserApi,
} from "@/api/adminUserApi";
import { useDispatch, useSelector } from "react-redux";

const UserSection = () => {

    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.auth);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    if (user?.role !== "admin") {
        return <p>Access Denied</p>;
    }

    useEffect(() => {
        let cancelled = false;
        (async () => {
            dispatch(setUsersLoading(true));
            try {
                const list = await fetchAdminUsersApi();
                if (!cancelled) dispatch(setUsers(list ?? []));
            } catch (e) {
                if (!cancelled) {
                    dispatch(
                        setUsersError(
                            e?.response?.data?.message || "Failed to load users"
                        )
                    );
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [dispatch]);

    const filteredUsers = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        return users
            .filter((u) => u.role === "user")
            .filter((u) => {
                const matchesSearch =
                    !query ||
                    u.name?.toLowerCase().includes(query) ||
                    u.email?.toLowerCase().includes(query);
                const matchesStatus =
                    statusFilter === "all" ||
                    (statusFilter === "active" && !u.blocked) ||
                    (statusFilter === "blocked" && u.blocked);
                return matchesSearch && matchesStatus;
            });
    }, [users, searchQuery, statusFilter]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, statusFilter]);

    const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const paginatedUsers = filteredUsers.slice(
        (safeCurrentPage - 1) * pageSize,
        safeCurrentPage * pageSize
    );

    const handleToggleRole = async (id) => {
        dispatch(setUsersLoading(true));
        try {
            const updated = await toggleUserRoleApi(id);
            dispatch(replaceUser(updated));
        } catch (e) {
            dispatch(
                setUsersError(e?.response?.data?.message || "Could not update role")
            );
        } finally {
            dispatch(setUsersLoading(false));
        }
    };

    const handleToggleBlock = async (id) => {
        dispatch(setUsersLoading(true));
        try {
            const updated = await toggleBlockUserApi(id);
            dispatch(replaceUser(updated));
        } catch (e) {
            dispatch(
                setUsersError(e?.response?.data?.message || "Could not update block status")
            );
        } finally {
            dispatch(setUsersLoading(false));
        }
    };

    const handleDeleteUser = async (id) => {
        dispatch(setUsersLoading(true));
        try {
            await deleteAdminUserApi(id);
            dispatch(removeUser(id));
        } catch (e) {
            dispatch(
                setUsersError(e?.response?.data?.message || "Could not delete user")
            );
        } finally {
            dispatch(setUsersLoading(false));
        }
    };



    return (
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Manage Users</h2>
                    <p className="text-sm text-slate-500">Review user profiles and control actions.</p>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700 font-medium">Total: {users.length}</span>
            </div>

            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
                className="w-full h-11 px-4 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            />

            <div className="mb-4">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full md:w-64 h-11 px-3 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                </select>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-50 text-slate-700">
                            <th className="p-3 text-left text-sm font-semibold">Name</th>
                            <th className="p-3 text-left text-sm font-semibold">Email</th>
                            <th className="p-3 text-left text-sm font-semibold">Role</th>
                            <th className="p-3 text-left text-sm font-semibold">Orders</th>
                            <th className="p-3 text-left text-sm font-semibold">Activity</th>
                            <th className="p-3 text-left text-sm font-semibold">Status</th>
                            <th className="p-3 text-left text-sm font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paginatedUsers.length > 0 ? paginatedUsers.map((u) => (
                                    <tr key={u._id} className="border-t border-slate-100 hover:bg-slate-50/70">
                                        <td className="p-3 font-medium text-slate-800">{u.name}</td>
                                        <td className="p-3 text-slate-600">{u.email}</td>
                                        <td className="p-3 capitalize">{u.role}</td>
                                        <td className="p-3">{u.orders}</td>
                                        <td className="p-3">{u.activity}</td>
                                        <td className="p-3">
                                            <span className={`px-2 py-1 rounded text-xs ${u.blocked ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                                                {u.blocked ? "Blocked" : "Active"}
                                            </span>
                                        </td>
                                        <td className="p-3">
                                            <div className="flex flex-wrap gap-2">
                                                <button type="button" variant="outline">View</button>
                                                <button type="button" variant="outline" onClick={() => handleToggleRole(u._id)}>
                                                    {u.role === "admin" ? "Make User" : "Make Admin"}
                                                </button>
                                                <button type="button" variant="outline" onClick={() => handleToggleBlock(u._id)}>
                                                    {u.blocked ? "Unblock" : "Block"}
                                                </button>
                                                <button type="button" variant="destructive" onClick={() => handleDeleteUser(u._id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                            )) : (
                                <tr>
                                    <td colSpan="7" className="text-center p-6 text-slate-500">
                                        No users found for the selected filters
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
                <p className="text-sm text-slate-500">
                    Showing {paginatedUsers.length} of {filteredUsers.length} users
                </p>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                        disabled={safeCurrentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="text-sm text-slate-600 min-w-[90px] text-center">
                        Page {safeCurrentPage} / {totalPages}
                    </span>
                    <button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                        disabled={safeCurrentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white px-6 py-3 rounded-lg font-medium">Updating users...</div>
                </div>
            )}
        </div>
    )
};

export default UserSection;
