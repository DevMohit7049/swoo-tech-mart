const reviews = [
  { id: "RV-1", user: "Aarav", product: "iPhone 16", rating: 5, comment: "Excellent phone!", status: "Pending" },
  { id: "RV-2", user: "Neha", product: "Gaming Mouse", rating: 1, comment: "Spam content", status: "Pending" },
  { id: "RV-3", user: "Rahul", product: "Dell 15", rating: 4, comment: "Good value", status: "Approved" },
];

const ReviewSection = () => {
  return (
    <div className="-(--) border -(--) rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
      <div>
        <h2 className="text-xl font-bold -(--)">Reviews Management</h2>
        <p className="text-sm -(--)">Approve, reject, or remove spam product reviews.</p>
      </div>

      <div className="overflow-x-auto rounded-xl border -(--)">
        <table className="w-full text-left">
          <thead className="-(--)">
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
              <tr key={review.id} className="border-t -(--)">
                <td className="p-3">{review.user}</td>
                <td className="p-3">{review.product}</td>
                <td className="p-3">{review.rating}/5</td>
                <td className="p-3">{review.comment}</td>
                <td className="p-3">{review.status}</td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg border -(--) -(--) px-3 py-2 text-sm font-medium -(--) hover:-(--)"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg border -(--) -(--) px-3 py-2 text-sm font-medium -(--) hover:-(--)"
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-lg -(--) px-3 py-2 text-sm font-medium -(--) hover:-(--)"
                    >
                      Delete
                    </button>
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
