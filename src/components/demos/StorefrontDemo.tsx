"use client";

import { useState } from "react";

export default function StorefrontDemo() {
    const [cartCount, setCartCount] = useState(0);

    const products = [
        { name: "Premium Widget", price: 2999, image: "from-blue-500 to-cyan-500" },
        { name: "Pro Gadget", price: 4999, image: "from-purple-500 to-pink-500" },
        { name: "Elite Device", price: 7999, image: "from-orange-500 to-red-500" },
        { name: "Ultra Tool", price: 1999, image: "from-green-500 to-emerald-500" },
    ];

    return (
        <div className="min-h-[600px] bg-midnight-950">
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-white/10">
                <h1 className="text-xl font-bold">StoreFront</h1>
                <button className="relative p-2 bg-midnight-800 rounded-lg">
                    🛒
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </button>
            </header>

            {/* Products */}
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, i) => (
                        <div key={i} className="bg-midnight-800 rounded-2xl overflow-hidden group">
                            <div className={`aspect-square bg-gradient-to-br ${product.image}`} />
                            <div className="p-4">
                                <h3 className="font-semibold mb-1">{product.name}</h3>
                                <p className="text-accent font-bold mb-3">₹{product.price.toLocaleString()}</p>
                                <button
                                    onClick={() => setCartCount(c => c + 1)}
                                    className="w-full py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-light transition-colors"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-xs text-zinc-500 py-4">Built with ₹4,999 Storefront Package</p>
        </div>
    );
}
