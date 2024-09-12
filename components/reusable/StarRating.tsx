import React from 'react';
import { Star } from 'lucide-react'; // Assuming you're using Lucide icons

const StarRating = ({ rating }: any) => {
    const maxStars = 5;

    return (
        <div className="flex items-center">
            {Array.from({ length: maxStars }, (_, index) => (
                <Star
                    key={index}
                    className={`h-3 w-3 ${index < rating ? ' fill-secondaryCol' : 'hidden'
                        }`}
                />
            ))}
        </div>
    );
};

export default StarRating;
