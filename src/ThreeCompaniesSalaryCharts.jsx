import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ThreeCompaniesSalaryCharts = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  // Anthropic salary data
  const anthropicData = [
    { position: 'Startup Account Executive', minSalary: 126000, maxSalary: 126000, avgSalary: 126000, category: 'Sales' },
    { position: 'Recruiter', minSalary: 170000, maxSalary: 170000, avgSalary: 170000, category: 'HR' },
    { position: 'Regulatory Operations Lead', minSalary: 210000, maxSalary: 210000, avgSalary: 210000, category: 'Operations' },
    { position: 'Finance & Strategy', minSalary: 230000, maxSalary: 230000, avgSalary: 230000, category: 'Business' },
    { position: 'Research Operations', minSalary: 230000, maxSalary: 230000, avgSalary: 230000, category: 'Operations' },
    { position: 'People Partner', minSalary: 285000, maxSalary: 285000, avgSalary: 285000, category: 'HR' },
    { position: 'Member of Technical Staff', minSalary: 300000, maxSalary: 405000, avgSalary: 352500, category: 'Technical' },
    { position: 'Research Engineer', minSalary: 340000, maxSalary: 690000, avgSalary: 515000, category: 'Technical' },
    { position: 'MTS Manager', minSalary: 690000, maxSalary: 690000, avgSalary: 690000, category: 'Management' }
  ];

  // OpenAI salary data
  const openaiData = [
    { position: 'Software Engineer', minSalary: 200000, maxSalary: 440000, avgSalary: 320000, category: 'Technical' },
    { position: 'Research Engineer', minSalary: 210000, maxSalary: 440000, avgSalary: 325000, category: 'Technical' },
    { position: 'Technical Staff (General)', minSalary: 210000, maxSalary: 530000, avgSalary: 370000, category: 'Technical' },
    { position: 'Communications Staff', minSalary: 216000, maxSalary: 216000, avgSalary: 216000, category: 'Communications' },
    { position: 'Go To Market Staff', minSalary: 220000, maxSalary: 280000, avgSalary: 250000, category: 'Business' },
    { position: 'Support & Community', minSalary: 235000, maxSalary: 235000, avgSalary: 235000, category: 'Operations' },
    { position: 'Data Science Staff', minSalary: 245000, maxSalary: 385000, avgSalary: 315000, category: 'Technical' },
    { position: 'Design Staff', minSalary: 245000, maxSalary: 245000, avgSalary: 245000, category: 'Design' },
    { position: 'Research Scientist', minSalary: 245000, maxSalary: 440000, avgSalary: 342500, category: 'Technical' },
    { position: 'Finance Staff', minSalary: 265000, maxSalary: 265000, avgSalary: 265000, category: 'Business' },
    { position: 'Program Staff', minSalary: 270000, maxSalary: 340000, avgSalary: 305000, category: 'Operations' },
    { position: 'Security Engineer', minSalary: 310000, maxSalary: 310000, avgSalary: 310000, category: 'Technical' },
    { position: 'Intelligence & Investigations', minSalary: 320000, maxSalary: 382500, avgSalary: 351250, category: 'Technical' },
    { position: 'Hardware Engineer', minSalary: 360000, maxSalary: 360000, avgSalary: 360000, category: 'Technical' }
  ];

  // Grammarly salary data
  const grammarlyData = [
    { position: 'Product Designer', minSalary: 110000, maxSalary: 230000, avgSalary: 170000, category: 'Design' },
    { position: 'Analytical Linguist', minSalary: 164800, maxSalary: 164800, avgSalary: 164800, category: 'Research' },
    { position: 'Data Scientist', minSalary: 170000, maxSalary: 170000, avgSalary: 170000, category: 'Technical' },
    { position: 'Software Engineer', minSalary: 180000, maxSalary: 302100, avgSalary: 241050, category: 'Technical' },
    { position: 'Software Engineer, Data Platform', minSalary: 196000, maxSalary: 196000, avgSalary: 196000, category: 'Technical' },
    { position: 'Product Manager', minSalary: 200000, maxSalary: 200000, avgSalary: 200000, category: 'Product' },
    { position: 'Technical Accounting Manager', minSalary: 201600, maxSalary: 201600, avgSalary: 201600, category: 'Business' },
    { position: 'User Researcher', minSalary: 221520, maxSalary: 221520, avgSalary: 221520, category: 'Research' },
    { position: 'AI Engineer', minSalary: 223000, maxSalary: 223000, avgSalary: 223000, category: 'Technical' },
    { position: 'Marketing Manager', minSalary: 225000, maxSalary: 225000, avgSalary: 225000, category: 'Marketing' },
    { position: 'Analytics Engineer', minSalary: 250000, maxSalary: 250000, avgSalary: 250000, category: 'Technical' },
    { position: 'System Engineer, Finance Infrastructure', minSalary: 280000, maxSalary: 280000, avgSalary: 280000, category: 'Technical' },
    { position: 'Engineering Manager, Data Platform', minSalary: 315000, maxSalary: 315000, avgSalary: 315000, category: 'Management' },
    { position: 'ML Software Engineer', minSalary: 318000, maxSalary: 318000, avgSalary: 318000, category: 'Technical' }
  ];

  const getBarColor = (category, hasRange) => {
    const baseColors = {
      'Technical': hasRange ? '#3B82F6' : '#1E40AF',
      'Management': hasRange ? '#EF4444' : '#B91C1C',
      'Business': hasRange ? '#10B981' : '#047857',
      'Operations': hasRange ? '#F59E0B' : '#D97706',
      'HR': hasRange ? '#8B5CF6' : '#6D28D9',
      'Sales': hasRange ? '#EC4899' : '#BE185D',
      'Design': hasRange ? '#F97316' : '#C2410C',
      'Communications': hasRange ? '#06B6D4' : '#0891B2',
      'Research': hasRange ? '#84CC16' : '#65A30D',
      'Product': hasRange ? '#A855F7' : '#7C3AED',
      'Marketing': hasRange ? '#F43F5E' : '#E11D48'
    };
    return baseColors[category] || '#6B7280';
  };

  const formatSalary = (value) => `$${(value / 1000).toFixed(0)}K`;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const hasRange = data.minSalary !== data.maxSalary;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg max-w-xs">
          <p className="font-semibold text-sm">{label}</p>
          {hasRange ? (
            <>
              <p className="text-blue-600 text-sm">薪資範圍: {formatSalary(data.minSalary)} - {formatSalary(data.maxSalary)}</p>
              <p className="text-green-600 text-sm">平均: {formatSalary(data.avgSalary)}</p>
            </>
          ) : (
            <p className="text-blue-600 text-sm">薪資: {formatSalary(data.avgSalary)}</p>
          )}
          <p className="text-gray-600 text-xs">類別: {data.category}</p>
        </div>
      );
    }
    return null;
  };

  const CompanyChart = ({ data, companyName, companyColor, description }) => (
    <div className="mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: companyColor }}>
          {companyName} 薪資結構分析
        </h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">職位數量</p>
            <p className="text-lg font-bold" style={{ color: companyColor }}>{data.length}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">最高薪資</p>
            <p className="text-lg font-bold" style={{ color: companyColor }}>
              {formatSalary(Math.max(...data.map(d => d.maxSalary)))}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">最低薪資</p>
            <p className="text-lg font-bold" style={{ color: companyColor }}>
              {formatSalary(Math.min(...data.map(d => d.minSalary)))}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded text-center">
            <p className="text-xs text-gray-600">平均薪資</p>
            <p className="text-lg font-bold" style={{ color: companyColor }}>
              {formatSalary(data.reduce((sum, d) => sum + d.avgSalary, 0) / data.length)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-2 md:p-6 rounded-lg overflow-hidden">
        <ResponsiveContainer width="100%" height={isMobile ? 300 : 500} minHeight={280}>
          <BarChart
            data={data.sort((a, b) => a.avgSalary - b.avgSalary)}
            margin={{ 
              top: 20, 
              right: isMobile ? 5 : 30, 
              left: isMobile ? 15 : 40, 
              bottom: isMobile ? 80 : 80 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="position" 
              angle={isMobile ? -60 : -45}
              textAnchor="end"
              height={isMobile ? 80 : 80}
              interval={0}
              tick={{ 
                fontSize: isMobile ? 7 : 10,
                width: isMobile ? 60 : 120
              }}
            />
            <YAxis 
              tickFormatter={formatSalary}
              tick={{ fontSize: isMobile ? 9 : 12 }}
              width={isMobile ? 45 : 60}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="avgSalary" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(entry.category, entry.minSalary !== entry.maxSalary)} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎯 AI領域技術專家的薪資水準
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 mb-6"></div>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          分析 Anthropic、OpenAI、Grammarly 三家代表性公司的薪資結構
        </p>
        <p className="text-gray-600">
        Source: H-1B visa program from 
        <a href="https://www.businessinsider.com/top-ai-startup-companies-salaries-pay-data-openai-anthropic-perplexity-2025-7" target="_blank" rel="noopener noreferrer"> Business Insider
        </a> </p>
      </div>

      {/* Company Comparison Overview */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 三家公司快速對比</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Anthropic</h3>
            <p className="text-3xl font-bold text-blue-800">$690K</p>
            <p className="text-sm text-blue-600">最高薪資 (技術主管)</p>
            <p className="text-xs text-gray-600 mt-1">9個職位 | 平均 $319K</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-600 mb-2">OpenAI</h3>
            <p className="text-3xl font-bold text-green-800">$360K</p>
            <p className="text-sm text-green-600">最高薪資 (硬體工程師)</p>
            <p className="text-xs text-gray-600 mt-1">14個職位 | 平均 $295K</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Grammarly</h3>
            <p className="text-3xl font-bold text-purple-800">$318K</p>
            <p className="text-sm text-purple-600">最高薪資 (ML 工程師)</p>
            <p className="text-xs text-gray-600 mt-1">14個職位 | 平均 $227K</p>
          </div>
        </div>
      </div>

      {/* Individual Company Charts */}
      <CompanyChart 
        data={anthropicData}
        companyName="Anthropic"
        companyColor="#3B82F6"
        description=""
      />
      
      <CompanyChart 
        data={openaiData}
        companyName="OpenAI"
        companyColor="#10B981"
        description=""
      />
      
      <CompanyChart 
        data={grammarlyData}
        companyName="Grammarly"
        companyColor="#8B5CF6"
        description=""
      />

      {/* Footer */}
      <div className="mt-12 text-center border-t pt-6">
        <p className="text-gray-600 text-sm">
          by <a 
            href="https://stellacoding.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            史戴拉寫扣週報
          </a>
        </p>
      </div>

      </div>
  );
};

export default ThreeCompaniesSalaryCharts;