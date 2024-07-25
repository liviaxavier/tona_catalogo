import bgCarteirinha from '../assets/BG-carteirinha-Tona-3.png';
export default function MemberCard({ member }: any) {
    const screenSize = window.innerWidth
    const isMobile = screenSize < 700

    const height = isMobile ? 400 : 600;
    const fontSize = 0.03 * height;
    const baseFontSize = `${fontSize}px`;
    const left = `${0.1 * height}px`;
    const top = `${0.4 * height}px`;
    const mediumFontSize = `${fontSize * 0.75}px`;
    const smallFontSize = `${fontSize / 2}px`;
    const position = 'absolute';
    const color = 'white';

    const common = { left, color }
    return <div id="member-card" style={{ position: 'relative' }}>
        <img src={bgCarteirinha} alt="" style={{ height: `${height}px` }} />
        <p style={{ ...common, position, top, fontSize: baseFontSize, fontWeight: 'bold' }}>{member.name}</p>
        <p style={{
            ...common, position, top: `${(0.4 * height) + (fontSize * 2)}px`, fontSize: smallFontSize,
        }}>plano</p>
        <p style={{ ...common, position, bottom: `${0.1 * height}px`, fontSize: smallFontSize, }}>
            Válido até: <span style={{ fontSize: mediumFontSize }}>data_validade</span></p>
    </div>
}