"use client";

import { useState } from "react";

export default function PublisherDemo() {
    const [view, setView] = useState<"public" | "admin">("public");

    const posts = [
        { title: "Getting Started with Digital Marketing", date: "Jan 15, 2026", status: "Published" },
        { title: "Top 10 Growth Strategies", date: "Jan 12, 2026", status: "Draft" },
        { title: "Building Your Brand Online", date: "Jan 10, 2026", status: "Published" },
    ];

    return (
        <div className="min-h-[600px] bg-midnight-950">
            {/* View Toggle */}
            <div className="flex justify-center gap-2 p-4 border-b border-white/10">
                <button
                    onClick={() => setView("public")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === "public" ? "bg-accent text-white" : "bg-midnight-800 text-zinc-400"
                        }`}
                >
                    Public Site
                </button>
                <button
                    onClick={() => setView("admin")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${view === "admin" ? "bg-accent text-white" : "bg-midnight-800 text-zinc-400"
                        }`}
                >
                    Admin Panel
                </button>
            </div>

            {view === "public" ? (
                /* Public Blog View */
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-2">The Publisher Blog</h1>
                    <p className="text-zinc-400 mb-8">Insights and updates from our team</p>

                    <div className="space-y-6">
                        {posts.filter(p => p.status === "Published").map((post, i) => (
                            <article key={i} className="p-6 bg-midnight-800 rounded-2xl hover:bg-midnight-700 transition-colors cursor-pointer">
                                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                                <p className="text-sm text-zinc-400">{post.date}</p>
                            </article>
                        ))}
                    </div>
                </div>
            ) : (
                /* Admin Panel */
                <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-2xl font-bold">Content Dashboard</h1>
                        <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium">
                            + New Post
                        </button>
                    </div>

                    <div className="bg-midnight-800 rounded-2xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-midnight-700 text-left text-sm text-zinc-400">
                                <tr>
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, i) => (
                                    <tr key={i} className="border-t border-white/5">
                                        <td className="p-4">{post.title}</td>
                                        <td className="p-4 text-zinc-400">{post.date}</td>
                                        <td className="p-4">
                                            <span className={`px-2 py-1 rounded text-xs ${post.status === "Published" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                                                }`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <button className="text-accent text-sm hover:underline">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <p className="text-center text-xs text-zinc-500 py-4">Built with ₹2,499 Publisher Package</p>
        </div>
    );
}
