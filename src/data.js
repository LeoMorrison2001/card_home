import { MessageCircle, Github, Globe, Crown } from 'lucide-vue-next'

export const profileData = {
    status: '正在构建心理陪伴AI',
    title: '全栈开发工程师',
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=m&glassesProbability=100',
    greeting: '你好，我是',
    name: 'Leo',
    tagline: '构建优雅且高效的数字产品',
    contactText: '建立联系',
    resumeText: '简历',
    email: 'hi@leomorrison.dev'
}

export const skillsData = {
    title: '技术栈',
    items: [
        { name: '架构设计', level: '专家', percent: 90, color: 'bg-brand-blue' },
        { name: '全栈开发', level: '精通', percent: 95, color: 'bg-emerald-500' },
        { name: 'DevOps', level: '熟练', percent: 85, color: 'bg-neutral-500' }
    ]
}

export const socialData = {
    icon: MessageCircle,
    label: '联系',
    name: 'WeChat',
    copyText: 'wechat_id_888',
    hoverBgClass: 'hover:bg-emerald-500',
    iconHoverClass: 'group-hover:bg-white group-hover:text-emerald-500',
    textClass: 'text-neutral-500 group-hover:text-white/80',
    actionIconClass: 'text-neutral-600 group-hover:text-white/80'
}

export const locationData = {
    location: '西安, CN',
    mapImage: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=800&auto=format&fit=crop'
}

export const brandData = {
    icon: Github,
    label: '开源主页',
    bgColor: 'bg-blue-500',
    link: 'https://github.com/LeoMorrison2001'
}

export const linkData = {
    label: 'HOME',
    url: 'home.maxcosmos.top',
    link: 'https://home.maxcosmos.top'
}



export const personalityData = {
    type: 'ENTJ',
    label: '指挥官人格',
    description: '天生的领导者。充满激情、自信和魅力，善于制定长远规划并带领团队达成目标。',
    tags: ['战略思维', '果断', '高效'],
    icon: Crown
}
