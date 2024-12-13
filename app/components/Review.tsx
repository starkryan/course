import React from 'react';
import { motion,} from 'framer-motion';
import { FaStar } from 'react-icons/fa';

// ... reviews array stays the same ...
// ... existing imports ...

const reviews = [
  {
    id: 1,
    user: 'Alice Johnson',
    review: 'This course was amazing! I learned so much about ethical hacking.',
    rating: 5,
    company: 'Tech Co.',
  },
  {
    id: 2,
    user: 'Bob Smith',
    review: 'Great course! The examples were very practical and easy to follow.',
    rating: 4.5,
    company: 'CyberSafe',
  },
  {
    id: 3,
    user: 'Charlie Brown',
    review: 'Informative and well-structured. Highly recommend to beginners.',
    rating: 4.8,
    company: 'SecurityPro',
  },
  {
    id: 4,
    user: 'Diana Prince',
    review: 'Excellent content and engaging delivery by the instructor.',
    rating: 5,
    company: 'Amazon',
  },
  {
    id: 5,
    user: 'Ethan Hunt',
    review: 'This course helped me advance my career in cybersecurity.',
    rating: 4.7,
    company: 'MI6',
  },
  {
    id: 6,
    user: 'Fiona Apple',
    review: 'Great course! The examples were very practical and easy to follow.',
    rating: 4.5,
    company: 'CyberSafe',
  },
];

// ... rest of the component code stays the same ...

const ReviewSection = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Loved by Students and Professionals</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{review.user}</h2>
              <p className="text-gray-400 text-sm">{review.company}</p>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 mb-4 relative">
                &quot;{review.review}&quot;
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="absolute -right-1 top-0 w-[2px] h-full bg-white"
                />
              </p>
            </motion.div>
            <div className="flex items-center">
              {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              {review.rating % 1 !== 0 && <FaStar className="text-yellow-500 opacity-50" />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;