import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ModelUpdate = ({ isOpen, onClose, onSave, item }) => {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.name || '');
            setAvatar(item.avatar || '');
            setCompany(item.company || '');
        }
    }, [item]);

  return (
      // dùng AnimatePresence của framer-motion để xử lý hiệu ứng khi mở và đóng modal
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white px-10 py-8 rounded-2xl shadow-2xl relative w-[500px]"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                            onClick={onClose}
                        >
                            ×
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">
                            Cập nhật thông tin
                        </h2>

                        <p className="font-bold mb-2">Name:</p>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full mb-4"
                        />

                        <p className="font-bold mb-2">Avatar:</p>
                        <input
                            type="text"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full mb-4"
                        />

                        <p className="font-bold mb-2">Company:</p>
                        <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full mb-4"
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                                onClick={onClose}
                            >
                                Hủy
                            </button>
                            <button
                                className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600"
                                onClick={() =>
                                    onSave({ ...item, name, avatar, company })
                                }
                            >
                                Lưu
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModelUpdate;
