import React, { useState } from "react";
import { commentProductApi } from "../../util/api";
import { useAuth } from "../context/auth.context";

export default function CommentProduct({
  productId,
  comments,
  onCommentAdded,
}) {
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { token, user } = useAuth();

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!token) {
      setError("Bạn cần đăng nhập để bình luận");
      return;
    }

    if (!newComment.trim()) {
      setError("Vui lòng nhập nội dung bình luận");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await commentProductApi(productId, newComment.trim());

      if (response.success) {
        // Add user info to the comment for immediate display
        const commentWithUser = {
          ...response.comment,
          User: { name: user?.name || "Anonymous" },
        };

        onCommentAdded(commentWithUser);
        setNewComment("");
      } else {
        setError("Không thể gửi bình luận");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      setError("Có lỗi xảy ra khi gửi bình luận");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="comment-section">
      <h3>Đánh giá sản phẩm</h3>

      {/* Comment Form */}
      <div className="comment-form">
        {token ? (
          <form onSubmit={handleSubmitComment}>
            <div className="form-group">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Viết đánh giá của bạn..."
                rows={4}
                disabled={isSubmitting}
                className="form-control"
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting || !newComment.trim()}
              className="btn btn-primary"
            >
              {isSubmitting ? "Đang gửi..." : "Gửi đánh giá"}
            </button>
          </form>
        ) : (
          <div className="login-prompt">
            <p>
              Bạn cần <a href="/login">đăng nhập</a> để có thể bình luận.
            </p>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="comments-list">
        {comments && comments.length > 0 ? (
          <div>
            <h4>Các đánh giá ({comments.length})</h4>
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">
                    {comment.User?.name || "Anonymous"}
                  </span>
                  <span className="comment-date">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <div className="comment-content">{comment.comment}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-comments">
            <p>Chưa có đánh giá nào cho sản phẩm này.</p>
          </div>
        )}
      </div>
    </div>
  );
}
