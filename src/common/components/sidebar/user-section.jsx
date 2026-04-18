import { useContext } from "react";
import { UserContext } from "../../providers/user-provider";

export const UserSection = () => {
    const { user } = useContext(UserContext);

    if (!user) return null;

    return (
        <div className="flex items-center space-x-4 p-4">
            <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full" />
            <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
            </div>
        </div>
    );
};