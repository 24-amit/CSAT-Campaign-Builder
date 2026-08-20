import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('content'); // 'content' | 'styling'
  const [activeStep, setActiveStep] = useState('initial'); // 'initial' | 'feedback' | 'thankyou'

  // Content Configuration State
  const [content, setContent] = useState({
    initialTitle: 'How was your experience?',
    initialSubtitle: 'Help us improve our service by providing quick feedback.',
    ratingType: 'stars',
    options: ['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'],
    showComment: true,
    submitText: 'Submit Feedback',
    mediaUrl: 'https://cdn-icons-png.flaticon.com/512/148/148767.png',
    thankYouTitle: 'Thank You!',
    thankYouSubtitle: 'We appreciate your valuable feedback.',
    thankYouBtnText: 'Close',
  });

  // Styling Configuration State
  const [style, setStyle] = useState({
    bgColor: '#ffffff',
    titleColor: '#111827',
    subtitleColor: '#4b5563',
    btnColor: '#2563eb',
    btnTextColor: '#ffffff',
    fontSize: 15,
    borderRadius: 16,
    btnWidth: 100,
    btnHeight: 44,
    ratingSelectedColor: '#f59e0b',
    ratingUnselectedColor: '#d1d5db',
  });

  const handleOptionChange = (index, value) => {
    const updated = [...content.options];
    updated[index] = value;
    setContent({ ...content, options: updated });
  };

  const addOption = () => {
    setContent({ ...content, options: [...content.options, `Option ${content.options.length + 1}`] });
  };

  const removeOption = (index) => {
    setContent({ ...content, options: content.options.filter((_, i) => i !== index) });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-slate-900 text-slate-100 font-sans overflow-hidden m-0 p-0">
      
      {/* LEFT PANEL: CONFIGURATION CONTROLS */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto p-6 md:p-8 bg-slate-900 border-r border-slate-800 text-left">
        <header className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-white mb-1">CSAT Campaign Builder</h1>
          <p className="text-xs text-slate-400">Configure your campaign popup content and appearance in real time.</p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 mb-6">
          <button
            onClick={() => setActiveTab('content')}
            className={`pb-3 px-6 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'content'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Content
          </button>
          <button
            onClick={() => setActiveTab('styling')}
            className={`pb-3 px-6 text-sm font-semibold transition-all border-b-2 ${
              activeTab === 'styling'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Styling
          </button>
        </div>

        {/* CONTENT TAB */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            {/* Initial Screen Section */}
            <section className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400">Initial Page</h2>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={content.initialTitle}
                  onChange={(e) => setContent({ ...content, initialTitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={content.initialSubtitle}
                  onChange={(e) => setContent({ ...content, initialSubtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </section>

            {/* Feedback Screen Section */}
            <section className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400">Feedback Page</h2>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Rating Style</label>
                <select
                  value={content.ratingType}
                  onChange={(e) => setContent({ ...content, ratingType: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                >
                  <option value="stars">Stars (1 - 5)</option>
                  <option value="numbers">Numbers (1 - 5)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">Dynamic Rating Options</label>
                <div className="space-y-2">
                  {content.options.map((opt, idx) => (
                    <div key={idx} className="flex gap-2">
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(idx, e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-slate-100 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={() => removeOption(idx)}
                        className="px-2.5 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addOption}
                  className="mt-3 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-semibold transition"
                >
                  + Add Option
                </button>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="showComment"
                  checked={content.showComment}
                  onChange={(e) => setContent({ ...content, showComment: e.target.checked })}
                  className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-0"
                />
                <label htmlFor="showComment" className="text-xs text-slate-300 font-medium cursor-pointer">
                  Enable Additional Comment Textarea
                </label>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Submit Button Text</label>
                <input
                  type="text"
                  value={content.submitText}
                  onChange={(e) => setContent({ ...content, submitText: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </section>

            {/* Thank You Screen Section */}
            <section className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400">Thank You Page</h2>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Media URL (PNG, JPG, GIF)</label>
                <input
                  type="text"
                  value={content.mediaUrl}
                  onChange={(e) => setContent({ ...content, mediaUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Title</label>
                <input
                  type="text"
                  value={content.thankYouTitle}
                  onChange={(e) => setContent({ ...content, thankYouTitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={content.thankYouSubtitle}
                  onChange={(e) => setContent({ ...content, thankYouSubtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Button Text</label>
                <input
                  type="text"
                  value={content.thankYouBtnText}
                  onChange={(e) => setContent({ ...content, thankYouBtnText: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </section>
          </div>
        )}

        {/* STYLING TAB */}
        {activeTab === 'styling' && (
          <div className="space-y-6">
            <section className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400">Color Palette</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Background', key: 'bgColor' },
                  { label: 'Title Text', key: 'titleColor' },
                  { label: 'Subtitle Text', key: 'subtitleColor' },
                  { label: 'Button Color', key: 'btnColor' },
                  { label: 'Button Text', key: 'btnTextColor' },
                  { label: 'Selected Rating', key: 'ratingSelectedColor' },
                  { label: 'Unselected Rating', key: 'ratingUnselectedColor' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                    <span className="text-xs text-slate-300 font-medium">{item.label}</span>
                    <input
                      type="color"
                      value={style[item.key]}
                      onChange={(e) => setStyle({ ...style, [item.key]: e.target.value })}
                      className="w-7 h-7 rounded border-0 bg-transparent cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/50 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400">Layout & Sizing</h2>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Font Size</span>
                  <span>{style.fontSize}px</span>
                </div>
                <input
                  type="range" min="12" max="22"
                  value={style.fontSize}
                  onChange={(e) => setStyle({ ...style, fontSize: Number(e.target.value) })}
                  className="w-full accent-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Border Radius</span>
                  <span>{style.borderRadius}px</span>
                </div>
                <input
                  type="range" min="0" max="32"
                  value={style.borderRadius}
                  onChange={(e) => setStyle({ ...style, borderRadius: Number(e.target.value) })}
                  className="w-full accent-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Button Width</span>
                  <span>{style.btnWidth}%</span>
                </div>
                <input
                  type="range" min="40" max="100"
                  value={style.btnWidth}
                  onChange={(e) => setStyle({ ...style, btnWidth: Number(e.target.value) })}
                  className="w-full accent-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Button Height</span>
                  <span>{style.btnHeight}px</span>
                </div>
                <input
                  type="range" min="32" max="56"
                  value={style.btnHeight}
                  onChange={(e) => setStyle({ ...style, btnHeight: Number(e.target.value) })}
                  className="w-full accent-blue-500"
                />
              </div>
            </section>
          </div>
        )}
      </div>

      {/* RIGHT PANEL: LIVE MOBILE PREVIEW */}
      <div className="w-full lg:w-1/2 h-full bg-slate-950 flex flex-col items-center justify-center p-6 relative">
        {/* Step Switcher Controls */}
        <div className="flex bg-slate-900 border border-slate-800 p-1.5 rounded-xl mb-6 space-x-1 shadow-lg">
          {['initial', 'feedback', 'thankyou'].map((step) => (
            <button
              key={step}
              onClick={() => setActiveStep(step)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                activeStep === step
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {step === 'thankyou' ? 'Thank You' : step}
            </button>
          ))}
        </div>

        {/* Mobile Device Container */}
        <div className="w-[340px] h-[640px] bg-black rounded-[48px] p-4 border-4 border-slate-800 shadow-2xl relative flex flex-col justify-end overflow-hidden ring-1 ring-slate-700/50">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-full flex items-center justify-center z-20">
            <div className="w-3 h-3 bg-slate-950 rounded-full border border-slate-800"></div>
          </div>

          <div
            className="w-full p-6 shadow-2xl transition-all duration-300 ease-out z-10 text-center"
            style={{
              backgroundColor: style.bgColor,
              borderRadius: `${style.borderRadius}px`,
              fontSize: `${style.fontSize}px`,
            }}
          >
            {activeStep === 'initial' && (
              <div className="space-y-3">
                <h3 className="font-bold leading-snug" style={{ color: style.titleColor }}>
                  {content.initialTitle}
                </h3>
                <p className="text-xs leading-relaxed opacity-90" style={{ color: style.subtitleColor }}>
                  {content.initialSubtitle}
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => setActiveStep('feedback')}
                    className="font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center"
                    style={{
                      backgroundColor: style.btnColor,
                      color: style.btnTextColor,
                      borderRadius: `${style.borderRadius}px`,
                      width: `${style.btnWidth}%`,
                      height: `${style.btnHeight}px`,
                    }}
                  >
                    Give Feedback
                  </button>
                </div>
              </div>
            )}

            {activeStep === 'feedback' && (
              <div className="space-y-3">
                <h3 className="font-bold leading-snug" style={{ color: style.titleColor }}>
                  How would you rate us?
                </h3>
                <div className="flex justify-center items-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <span
                      key={val}
                      className="text-xl font-bold transition-colors cursor-pointer"
                      style={{ color: val <= 4 ? style.ratingSelectedColor : style.ratingUnselectedColor }}
                    >
                      {content.ratingType === 'stars' ? '★' : val}
                    </span>
                  ))}
                </div>

                {content.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 justify-center max-h-24 overflow-y-auto py-1">
                    {content.options.map((opt, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-medium"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                )}

                {content.showComment && (
                  <textarea
                    rows={2}
                    placeholder="Leave additional feedback..."
                    className="w-full p-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white text-slate-800 placeholder-slate-400 resize-none"
                  />
                )}

                <div className="pt-1 flex justify-center">
                  <button
                    onClick={() => setActiveStep('thankyou')}
                    className="font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center"
                    style={{
                      backgroundColor: style.btnColor,
                      color: style.btnTextColor,
                      borderRadius: `${style.borderRadius}px`,
                      width: `${style.btnWidth}%`,
                      height: `${style.btnHeight}px`,
                    }}
                  >
                    {content.submitText}
                  </button>
                </div>
              </div>
            )}

            {activeStep === 'thankyou' && (
              <div className="space-y-3">
                {content.mediaUrl && (
                  <img
                    src={content.mediaUrl}
                    alt="Thank you visual"
                    className="w-16 h-16 mx-auto object-contain rounded-lg"
                  />
                )}
                <h3 className="font-bold leading-snug" style={{ color: style.titleColor }}>
                  {content.thankYouTitle}
                </h3>
                <p className="text-xs leading-relaxed opacity-90" style={{ color: style.subtitleColor }}>
                  {content.thankYouSubtitle}
                </p>
                <div className="pt-2 flex justify-center">
                  <button
                    onClick={() => setActiveStep('initial')}
                    className="font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center"
                    style={{
                      backgroundColor: style.btnColor,
                      color: style.btnTextColor,
                      borderRadius: `${style.borderRadius}px`,
                      width: `${style.btnWidth}%`,
                      height: `${style.btnHeight}px`,
                    }}
                  >
                    {content.thankYouBtnText}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}