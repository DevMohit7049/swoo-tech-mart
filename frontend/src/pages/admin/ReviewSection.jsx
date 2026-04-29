import { Button } from "@/components/ui/button";

const reviews = [
  { id: "RV-1", user: "Aarav", product: "iPhone 16", rating: 5, comment: "Excellent phone!", status: "Pending" },
  { id: "RV-2", user: "Neha", product: "Gaming Mouse", rating: 1, comment: "Spam content", status: "Pending" },
  { id: "RV-3", user: "Rahul", product: "Dell 15", rating: 4, comment: "Good value", status: "Approved" },
];

const ReviewSection = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Reviews Management</h2>
        <p className="text-sm text-slate-500">Approve, reject, or remove spam product reviews.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3 text-sm font-semibold">User</th>
              <th className="p-3 text-sm font-semibold">Product</th>
              <th className="p-3 text-sm font-semibold">Rating</th>
              <th className="p-3 text-sm font-semibold">Comment</th>
              <th className="p-3 text-sm font-semibold">Status</th>
              <th className="p-3 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id} className="border-t border-slate-100">
                <td className="p-3">{review.user}</td>
                <td className="p-3">{review.product}</td>
                <td className="p-3">{review.rating}/5</td>
                <td className="p-3">{review.comment}</td>
                <td className="p-3">{review.status}</td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Approve</Button>
                    <Button variant="outline">Reject</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewSection;
