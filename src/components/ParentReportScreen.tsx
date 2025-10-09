import React, { useMemo } from 'react';
import { ActivityStats, ActivityType, ActivityCategory } from '../types.ts';
import { ALL_SUB_ACHIEVEMENTS, ACHIEVEMENTS } from '../constants.ts';
import ArrowLeftIcon from './icons/ArrowLeftIcon.tsx';
import CheckCircleIcon from './icons/CheckCircleIcon.tsx';
import XCircleIcon from './icons/XCircleIcon.tsx';
import RobotIcon from './icons/RobotIcon.tsx';
import AcademicCapIcon from './icons/AcademicCapIcon.tsx';
import StarIcon from './icons/StarIcon.tsx';
import ClipboardListIcon from './icons/ClipboardListIcon.tsx';
import { getColorClasses } from '../themes/colorManager.ts';


interface ParentReportScreenProps {
    activityStats: Record<string, ActivityStats>;
    onBack: () => void;
}

// Helper component for progress bar
const ProgressBar: React.FC<{ percentage: number }> = ({ percentage }) => {
    const color = percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500';
    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className={`${color} h-2.5 rounded-full transition-all duration-300`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

// Helper component for mastery stars
const MasteryStars: React.FC<{ completions: number }> = ({ completions }) => {
    const masteryLevel = Math.min(3, completions || 0);
    return (
        <div className="flex flex-shrink-0">
            {[...Array(3)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < masteryLevel ? 'text-amber-400' : 'text-slate-300'}`} />
            ))}
        </div>
    );
};


const ParentReportScreen: React.FC<ParentReportScreenProps> = ({ activityStats, onBack }) => {

    const reportData = useMemo(() => {
        const analyzedStats = Object.keys(activityStats).map(key => {
            const stats = activityStats[key];
            if (!stats || stats.attempts === 0 || (stats.totalQuestions || 0) === 0) {
                return null;
            }

            const correct = stats.totalCorrect || 0;
            const total = stats.totalQuestions || 1;
            const successRate = (correct / total) * 100;
            const errorRate = 100 - successRate;

            const keyParts = key.split('-');
            const baseActivityIdStr = keyParts[0];
            const subIdentifier = keyParts.length > 1 ? keyParts[1] : null;

            const subAchievementInfo = ALL_SUB_ACHIEVEMENTS.find(sa => String(sa.id) === baseActivityIdStr);

            if (!subAchievementInfo) {
                return null;
            }

            let name = subAchievementInfo.name;
            if (subIdentifier) {
                const isSyllabification = String(subAchievementInfo.id) === String(ActivityType.Syllabification);
                name = `${name} (${isSyllabification ? 'Grup' : ''} ${subIdentifier})`;
            }

            return {
                id: key,
                name: name,
                category: subAchievementInfo.category,
                attempts: stats.attempts,
                completions: stats.completions || 0,
                successRate,
                errorRate
            };
        }).filter(Boolean) as any[];

        const mostChallenging = [...analyzedStats]
            .filter(s => s.successRate < 80 && s.completions < 3)
            .sort((a, b) => a.successRate - b.successRate)
            .slice(0, 5);

        const bestPerforming = [...analyzedStats]
            .filter(s => s.successRate >= 90 || s.completions >= 3)
            .sort((a, b) => b.successRate - a.successRate)
            .slice(0, 5);
        
        const recentActivities = [...analyzedStats]
            .sort((a, b) => {
                 const lastAttemptA = activityStats[a.id]?.history?.slice(-1)[0]?.timestamp || 0;
                 const lastAttemptB = activityStats[b.id]?.history?.slice(-1)[0]?.timestamp || 0;
                 return lastAttemptB - lastAttemptA;
            })
            .slice(0, 5);


        let recommendations: string[] = [];
        if (mostChallenging.length > 0) {
            const worst = mostChallenging[0];
            recommendations.push(`Çocuğunuzun en çok zorlandığı "${worst.name}" etkinliği üzerine odaklanarak başlayabilirsiniz.`);
            recommendations.push(`Bu etkinliği tekrar oynarken ona model olabilir ve doğru cevapları birlikte bulabilirsiniz.`);
        } else if (bestPerforming.length > 0) {
            const best = bestPerforming[0];
            recommendations.push(`Çocuğunuz "${best.name}" konusunda çok başarılı! Bu alandaki özgüvenini pekiştirmek için benzer etkinlikleri deneyebilirsiniz.`);
        } else {
             recommendations.push("Öğrenme yolculuğuna devam edin! Farklı kategorilerden etkinlikler deneyerek yeni beceriler kazanmasına yardımcı olabilirsiniz.");
        }
        
        const fullReport: Record<string, any[]> = {};
        ACHIEVEMENTS.forEach(ach => {
            fullReport[ach.id] = [];
        });

        analyzedStats.forEach(stat => {
            if (stat.category && fullReport[stat.category]) {
                fullReport[stat.category].push(stat);
            }
        });

        for (const category in fullReport) {
            fullReport[category].sort((a: any, b: any) => a.name.localeCompare(b.name, 'tr'));
        }
        
        return { mostChallenging, bestPerforming, recentActivities, recommendations, fullReport };

    }, [activityStats]);

    const Card: React.FC<{ icon: React.FC<{ className?: string }>, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
        <div className="bg-white/80 p-4 sm:p-5 rounded-2xl shadow-md w-full">
            <div className="flex items-center mb-3">
                <Icon className="w-7 h-7 text-slate-500 mr-3"/>
                <h2 className="text-lg sm:text-xl font-bold text-slate-700">{title}</h2>
            </div>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
    
    const StatItem: React.FC<{ name: string, rate: number, isSuccess: boolean }> = ({ name, rate, isSuccess }) => (
         <div className="flex items-center justify-between text-sm sm:text-base">
            <span className="text-slate-600 font-semibold">{name}</span>
            <span className={`font-bold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                %{Math.round(rate)} {isSuccess ? 'Başarı' : 'Hata'}
            </span>
        </div>
    );
    
    const CategoryReportCard: React.FC<{
        category: { id: ActivityCategory; name: string; icon: React.FC<{ className?: string }>; color: string };
        activities: any[];
    }> = ({ category, activities }) => {
        if (activities.length === 0) return null;
        
        const { icon: Icon, name, color } = category;
        const colorClasses = getColorClasses(color);

        return (
            <div className="bg-white/80 p-4 sm:p-5 rounded-2xl shadow-md w-full">
                <div className="flex items-center mb-4">
                    <div className={`p-2 ${colorClasses.bg100} rounded-lg mr-3`}>
                        <Icon className={`w-6 h-6 ${colorClasses.text600}`} />
                    </div>
                    <h2 className={`text-lg sm:text-xl font-bold ${colorClasses.text800}`}>{name}</h2>
                </div>
                <div className="space-y-4">
                    {activities.map((activity: any) => (
                        <div key={activity.id}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-slate-700 font-semibold text-sm sm:text-base">{activity.name}</span>
                                <MasteryStars completions={activity.completions} />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-grow">
                                    <ProgressBar percentage={activity.successRate} />
                                </div>
                                <span className="text-xs font-bold text-slate-500 w-20 text-right">{activity.attempts} deneme</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <div className="flex flex-col items-center justify-start h-full max-w-4xl mx-auto p-4 animate-fade-in">
            <div className="w-full flex items-center mb-8 relative">
                <button 
                    onClick={onBack} 
                    className="absolute left-0 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors" 
                    aria-label="Geri dön"
                >
                    <ArrowLeftIcon className="w-8 h-8 text-slate-700" />
                </button>
                <h1 className="flex-1 text-center text-3xl sm:text-4xl font-black text-slate-800">
                    Gelişim Raporu
                </h1>
            </div>

            <div className="w-full flex-grow overflow-y-auto pr-2 space-y-4">
                <Card icon={XCircleIcon} title="En Çok Zorlanılanlar (Özet)">
                    {reportData.mostChallenging.length > 0 ? (
                        reportData.mostChallenging.map(item => (
                            <StatItem key={String(item.id)} name={item.name} rate={item.errorRate} isSuccess={false} />
                        ))
                    ) : (
                        <p className="text-slate-500 text-sm">Belirgin bir zorluk alanı bulunamadı. Harika gidiyor!</p>
                    )}
                </Card>

                 <Card icon={CheckCircleIcon} title="En Başarılı Alanlar (Özet)">
                    {reportData.bestPerforming.length > 0 ? (
                        reportData.bestPerforming.map(item => (
                            <StatItem key={String(item.id)} name={item.name} rate={item.successRate} isSuccess={true} />
                        ))
                    ) : (
                        <p className="text-slate-500 text-sm">Başarı verileri toplamak için daha fazla etkinlik tamamlanmalı.</p>
                    )}
                </Card>

                <Card icon={RobotIcon} title="Öneriler">
                     <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm sm:text-base">
                        {reportData.recommendations.map((rec, index) => (
                            <li key={index}>{rec}</li>
                        ))}
                    </ul>
                </Card>
                
                <div className="w-full flex items-center pt-6 pb-2">
                 <ClipboardListIcon className="w-8 h-8 text-slate-500 mr-3"/>
                 <h2 className="text-2xl font-bold text-slate-700">Tüm Etkinlik Raporu</h2>
                </div>
                
                {ACHIEVEMENTS.map(category => (
                    <CategoryReportCard
                        key={category.id}
                        category={category}
                        activities={reportData.fullReport[category.id]}
                    />
                ))}

                <Card icon={AcademicCapIcon} title="Son Aktiviteler">
                    {reportData.recentActivities.length > 0 ? (
                        reportData.recentActivities.map(item => (
                             <div key={item.id} className="flex items-center justify-between text-sm sm:text-base">
                                <span className="text-slate-600 font-semibold">{item.name}</span>
                                <span className="font-bold text-slate-500">{item.attempts} deneme</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-slate-500 text-sm">Henüz bir etkinlik tamamlanmadı.</p>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default React.memo(ParentReportScreen);