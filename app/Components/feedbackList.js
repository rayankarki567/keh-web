'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const { data, error } = await supabase.from('feedback').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching feedback:', error);
      } else {
        setFeedbacks(data);
      }
      setLoading(false);
    };

    fetchFeedbacks();
  }, []);

  return (
    <>
       <div className='text-3xl font-serif h2after text-center mt-32 font-extrabold text-dblue z-50'><h1>Feedback</h1></div>
    <div className="feedback-list max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg relative z-10-">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <ul className="space-y-6">
          {feedbacks.map((feedback) => (
            <li key={feedback.id} className="py-2 px-6 border border-gray-200 rounded-md">
              <h3 className="text-lg font-semibold text-gray-900">{feedback.full_name}</h3>
              <p className="text-gray-700"> {feedback.comment}</p>
              <small className="text-gray-400 text-xs">{new Date(feedback.created_at).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default FeedbackList;
