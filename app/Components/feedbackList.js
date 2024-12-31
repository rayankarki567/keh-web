'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch initial feedbacks
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching initial feedback:', error);
      } else {
        setFeedbacks(data);
      }
      setLoading(false);
    };

    fetchFeedbacks(); // Fetch initial data

    // Subscribe to real-time changes
    const feedbackSubscription = supabase
      .channel('public:feedback')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'feedback' }, (payload) => {
        console.log('New feedback received:', payload.new);
        setFeedbacks((prevFeedbacks) => [payload.new, ...prevFeedbacks]);
      })
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(feedbackSubscription);
    };
  }, []);

  return (
    <>
      <div className='text-3xl font-serif h2after text-center mt-32 font-extrabold text-dblue z-50'><h1>Feedback</h1></div>
      <div className="feedback-list max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg relative z-10">
        {loading ? (
          <p className="text-gray-500">Loading feedback...</p>
        ) : (
          <ul className="space-y-4">
            {feedbacks.map((feedback) => (
              <li key={feedback.id} className="p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-semibold text-gray-900">{feedback.full_name}</h3>
                <p className="text-gray-700">{feedback.comment}</p>
                <small className="text-gray-400 text-sm">
                  {new Date(feedback.created_at).toLocaleDateString()}
                </small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FeedbackList;
