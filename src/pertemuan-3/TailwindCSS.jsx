export default function TailwindCSS() {
    // Component: Spacing & Card
    function Spacing() {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900">Padding & Margin</h2>
                        <p className="text-gray-500 text-sm leading-relaxed mt-1">
                            Contoh penggunaan padding (p-6) dan margin (m-4) di Tailwind CSS.
                        </p>
                        <div className="mt-3 flex gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 text-xs text-gray-600">p-6</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 text-xs text-gray-600">m-4</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Component: Typography
    function Typography() {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-1 bg-gray-300 rounded-full"></div>
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Tailwind Typography</h1>
                    </div>
                    <p className="text-gray-500 leading-relaxed pl-3">
                        Belajar Tailwind sangat menyenangkan dan cepat! Dengan utility-first CSS, 
                        styling menjadi lebih konsisten dan efisien.
                    </p>
                    <div className="flex gap-3 pl-3">
                        <span className="text-xs text-gray-400">text-2xl</span>
                        <span className="text-xs text-gray-400">font-bold</span>
                        <span className="text-xs text-gray-400">tracking-tight</span>
                    </div>
                </div>
            </div>
        )
    }

    // Component: Border Radius
    function BorderRadius() {
        const variants = [
            { name: 'Rounded None', class: 'rounded-none', value: 'rounded-none' },
            { name: 'Rounded Small', class: 'rounded', value: 'rounded' },
            { name: 'Rounded Medium', class: 'rounded-lg', value: 'rounded-lg' },
            { name: 'Rounded Large', class: 'rounded-xl', value: 'rounded-xl' },
            { name: 'Rounded Full', class: 'rounded-full', value: 'rounded-full' }
        ]

        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Border Radius</h3>
                <div className="flex flex-wrap gap-3">
                    {variants.map((variant) => (
                        <button
                            key={variant.name}
                            className={`${variant.class} bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 text-sm transition-all duration-200`}
                        >
                            {variant.name}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    // Component: Background Colors
    function BackgroundColors() {
        return (
            <div className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">Tailwind Colors</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mt-1">
                            Belajar Tailwind itu seru dan fleksibel! Dengan utility classes untuk warna dan gradient.
                        </p>
                        <div className="mt-3 flex gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-white/10 text-xs text-white/80">bg-gradient</span>
                            <span className="inline-flex items-center px-2 py-1 rounded-md bg-white/10 text-xs text-white/80">shadow-lg</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Component: Flexbox & Grid
    function FlexboxGrid() {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <nav className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-800 rounded-lg"></div>
                        <h1 className="text-lg font-semibold text-gray-900">MyWebsite</h1>
                    </div>
                    <ul className="flex gap-6">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Home</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">About</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Contact</a></li>
                    </ul>
                </nav>
                <div className="p-6">
                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-50 rounded-lg p-3 text-center text-xs text-gray-600">Grid 1</div>
                        <div className="bg-gray-50 rounded-lg p-3 text-center text-xs text-gray-600">Grid 2</div>
                        <div className="bg-gray-50 rounded-lg p-3 text-center text-xs text-gray-600">Grid 3</div>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center">flex justify-between • grid grid-cols-3</p>
                </div>
            </div>
        )
    }

    // Component: Shadow Effects
    function ShadowEffects() {
        return (
            <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-600 transition-colors"></div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                                Shadow Effects
                            </h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Hover untuk melihat efek bayangan. Dari shadow-sm ke shadow-xl dengan transisi halus.
                        </p>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    // Main Component Return
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-4">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                            Tailwind CSS Components
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                        Belajar Tailwind CSS
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Kumpulan komponen modern dengan desain minimalis dan elegan
                    </p>
                </div>

                {/* Demo Button */}
                <div className="flex justify-center mb-12">
                    <button className="group relative bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm font-medium inline-flex items-center gap-2">
                        <span>Get Started</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Components Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <Spacing />
                        <Typography />
                        <BorderRadius />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <BackgroundColors />
                        <FlexboxGrid />
                        <ShadowEffects />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            Made using Tailwind CSS
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Documentation</a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Components</a>
                            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}