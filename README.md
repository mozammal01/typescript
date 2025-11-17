Ans. to the question no. 2

typescript এ keyof এর কাজ হলো value টা কোন ধরণের type তা সংজ্ঞায়িত করা করা । যেমন  : 

typeof value === "string" ? value.toUpperCase() : value;

এখানে আমরা typeof দিয়ে চেক করলাম যে value টা কোন ধরণের type । যদি value টা string হয় তাহলে value টা কে uppercase করে দিবে আর না হলে value টা কে return করে দিবে ।


Ans. to the question no. 3

any,unknown,never এগুলো হলো typescript এর কিছু টাইপ । যেগুলোর মাধ্যমে value এর টাইপ সংজ্ঞায়িত করা যায় ।

any: টাইপ any এর ক্ষেত্রে যেকোনো ধরণের value নেওয়া যায় । যেমন : আমি যদি টাইপ any ব্যবহার করি পরবর্তীতে চাইলে আমি সেটার value হিসাবে string দিতে পারবো , number দিতে পারবো , boolean দিতে পারবো etc । আর সাধারণত যদি কোন ধরণের টাইপ তা সংজ্ঞায়িত না করে এর value হিসাবে ভিন্ন ধরণের টাইপ দেই তাহলে সেটা সাধারণত any টাইপ হিসেবে ধরে নিবে ।

unknown: টাইপ unknown হলো যখন আমরা জানি না যে আমাদের value হিসাবে কোন ধরণের টাইপ আসবে । আমরা টাইপ টা শুধুমাত্র রানটাইমেই বুঝতে পারবো ।

never: টাইপ never ব্যবহার করি যখন আমরা জানি যে এইটা জীবনে কোনো দিন কোনো কিছু রিটার্ন করবে না ।