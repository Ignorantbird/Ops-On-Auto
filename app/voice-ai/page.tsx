import { pageMeta } from '@/lib/metadata';
import VoiceAI from '@/views/VoiceAI';

export const metadata = pageMeta({
  title: 'AI Voice Agent - Intelligent Voice Automation That Never Sleeps',
  description:
    'Advanced AI Voice Agent for intelligent conversations. Human-like voice bots that handle lead qualification, appointment booking, and customer service 24/7. Premium Agentic AI starting from $800.',
  keywords:
    'AI voice agent, agentic AI voice, intelligent voice automation, voice AI bot, conversational AI, lead qualification bot, appointment booking bot, voice automation',
  canonical: '/voice-ai',
});

export default function VoiceAIPage() {
  return <VoiceAI />;
}
