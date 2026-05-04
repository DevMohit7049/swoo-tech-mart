import { Link, useLocation } from "react-router-dom";
import ROUTE_PATHS from "@/constants/Routes";

const Breadcrumbs = () => {
    const { pathname } = useLocation();

    const segmentLabelMap = {
        shop: "Shop",
        product: "Product",
        category: "Category",
        login: "Login",
        register: "Register",
        contact: "Contact",
        cart: "Cart",
        checkout: "Checkout",
        admin: "Admin",
        dashboard: "Dashboard",
    };

    const segments = pathname.split("/").filter(Boolean);
    const crumbs = [{ label: "Home", to: ROUTE_PATHS.ROOT }];

    if (segments.length === 0) {
        crumbs.push({ label: "Home", to: null });
    } else {
        let runningPath = "";
        segments.forEach((segment, index) => {
            runningPath += `/${segment}`;
            const isLast = index === segments.length - 1;
            const normalizedSegment = decodeURIComponent(segment).replace(/-/g, " ");
            const prettyLabel =
                segmentLabelMap[segment] ||
                normalizedSegment.replace(/\b\w/g, (char) => char.toUpperCase());

            crumbs.push({
                label: prettyLabel,
                to: isLast ? null : runningPath,
            });
        });
    }

    return (
        <div className="sticky top-[124px] lg:top-[160px] z-20 w-full px-4 sm:px-8 mt-3">
            <div className="w-full bg-gray-100 rounded-lg px-5 py-6">
                <div className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
                    {crumbs.map((crumb, index) => {
                        const isLast = index === crumbs.length - 1;
                        return (
                            <span key={`${crumb.label}-${index}`} className="inline-flex items-center gap-2">
                                {crumb.to ? (
                                    <Link to={crumb.to} className="hover:text-black transition">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-black font-semibold">{crumb.label}</span>
                                )}
                                {!isLast && <span>/</span>}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;