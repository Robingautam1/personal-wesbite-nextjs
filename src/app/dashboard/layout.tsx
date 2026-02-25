import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/');
    }

    return (
        <div className="min-h-screen bg-[#030303] text-white">
            <div className="noise-bg fixed inset-0 opacity-[0.03] pointer-events-none z-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {children}
            </div>
        </div>
    );
}
