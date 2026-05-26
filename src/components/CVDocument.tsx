import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { cvSections, type CVSection } from '../data/cvContent';
import { profile } from '../data/profile';

// Usamos Helvetica (built-in en PDF, sin descargas externas)

const COLORS = {
  bg: '#0a0a14',
  card: '#15151f',
  border: '#2a2a3a',
  text: '#f5f5fa',
  muted: '#a8a8b8',
  dim: '#71718a',
  accent: '#8b5cf6',
  accent2: '#22d3ee',
  accent3: '#ec4899',
  white: '#ffffff',
};

const s = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: COLORS.bg,
    color: COLORS.text,
    padding: 50,
    fontSize: 11,
    lineHeight: 1.55,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 9,
    color: COLORS.dim,
  },
  footerLine: {
    position: 'absolute',
    bottom: 40,
    left: 50,
    right: 50,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  headerName: {
    fontSize: 9,
    color: COLORS.dim,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  headerSection: {
    fontSize: 9,
    color: COLORS.accent2,
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: COLORS.white,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.muted,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 11,
    color: COLORS.text,
    marginBottom: 10,
    lineHeight: 1.65,
  },
  // COVER
  cover: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: 50,
    justifyContent: 'space-between',
  },
  coverHeader: { flexDirection: 'column' },
  coverYear: {
    fontSize: 10,
    color: COLORS.accent2,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  coverDivider: {
    width: 60,
    height: 2,
    backgroundColor: COLORS.accent,
    marginTop: 14,
  },
  coverCenter: { paddingVertical: 60 },
  coverName: {
    fontSize: 56,
    fontWeight: 700,
    color: COLORS.white,
    lineHeight: 1.05,
    marginBottom: 16,
  },
  coverRole: {
    fontSize: 20,
    color: COLORS.accent2,
    marginBottom: 12,
    fontWeight: 500,
  },
  coverTagline: {
    fontSize: 12,
    color: COLORS.muted,
    letterSpacing: 1,
  },
  coverFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: 9,
    color: COLORS.dim,
  },
  // TOC
  tocRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    paddingVertical: 3,
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.border,
  },
  tocNum: {
    width: 28,
    fontSize: 10,
    color: COLORS.accent,
    fontWeight: 600,
  },
  tocLabel: {
    flex: 1,
    fontSize: 11,
    color: COLORS.text,
  },
  // LETTER
  letterParagraph: {
    fontSize: 11,
    color: COLORS.text,
    marginBottom: 12,
    lineHeight: 1.75,
    textAlign: 'justify',
  },
  letterSign: {
    fontSize: 11,
    color: COLORS.accent2,
    marginTop: 18,
    fontWeight: 600,
  },
  // PROFILE
  profileRow: {
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  profileLabel: {
    width: '40%',
    fontSize: 10,
    color: COLORS.muted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  profileValue: {
    flex: 1,
    fontSize: 11,
    color: COLORS.text,
    fontWeight: 500,
  },
  // BULLETS
  bullet: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingRight: 8,
  },
  bulletDot: {
    width: 14,
    color: COLORS.accent,
    fontSize: 11,
    fontWeight: 700,
  },
  bulletText: {
    flex: 1,
    fontSize: 11,
    color: COLORS.text,
    lineHeight: 1.55,
  },
  // ITEMS
  item: {
    marginBottom: 14,
    paddingLeft: 14,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.accent,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.white,
    marginBottom: 3,
  },
  itemPeriod: {
    fontSize: 9,
    color: COLORS.accent2,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 6,
  },
  itemDesc: {
    fontSize: 11,
    color: COLORS.muted,
    lineHeight: 1.55,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 7,
  },
  tag: {
    fontSize: 8,
    color: COLORS.accent2,
    backgroundColor: 'rgba(34, 211, 238, 0.08)',
    borderWidth: 0.5,
    borderColor: COLORS.accent2,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 5,
    marginBottom: 4,
    borderRadius: 3,
  },
  // SKILL BARS
  skillRow: { marginBottom: 12 },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  skillName: { fontSize: 11, color: COLORS.text, fontWeight: 500 },
  skillLevel: { fontSize: 9, color: COLORS.dim },
  skillBarTrack: {
    height: 4,
    backgroundColor: COLORS.card,
    borderRadius: 2,
  },
  skillBarFill: {
    height: 4,
    backgroundColor: COLORS.accent,
    borderRadius: 2,
  },
  skillNote: {
    fontSize: 9,
    color: COLORS.dim,
    marginTop: 2,
    fontStyle: 'italic',
  },
  // QUOTE
  quoteBox: {
    padding: 20,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent2,
    backgroundColor: COLORS.card,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 14,
    color: COLORS.white,
    fontStyle: 'italic',
    lineHeight: 1.55,
    marginBottom: 8,
  },
  quoteAuthor: {
    fontSize: 10,
    color: COLORS.accent2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  // TWO COLUMN
  twoCol: { flexDirection: 'row', gap: 20 },
  col: { flex: 1 },
  colHeading: {
    fontSize: 12,
    fontWeight: 700,
    color: COLORS.accent2,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

function Header({ section, total, current }: { section: string; total: number; current: number }) {
  return (
    <View style={s.header} fixed>
      <Text style={s.headerName}>{profile.name} · CV</Text>
      <Text style={s.headerSection}>{section}</Text>
    </View>
  );
}

function Footer({ pageLabel }: { pageLabel?: string }) {
  return (
    <>
      <View style={s.footerLine} fixed />
      <Text
        style={s.pageNumber}
        fixed
        render={({ pageNumber, totalPages }) =>
          `${profile.name} · ${pageNumber} / ${totalPages}`
        }
      />
    </>
  );
}

function SectionPage({ section, idx, total }: { section: CVSection; idx: number; total: number }) {
  if (section.layout === 'cover') {
    return (
      <Page size="A4" style={s.cover}>
        <View style={s.coverHeader}>
          <Text style={s.coverYear}>{section.tagline}</Text>
          <View style={s.coverDivider} />
        </View>
        <View style={s.coverCenter}>
          <Text style={s.coverName}>{section.title}</Text>
          <Text style={s.coverRole}>{section.subtitle}</Text>
          <Text style={s.coverTagline}>{profile.location} · {profile.email}</Text>
        </View>
        <View style={s.coverFooter}>
          <Text>juancorcuera.dev</Text>
          <Text>página 1 de {total}</Text>
        </View>
      </Page>
    );
  }

  const sectionLabel = `${String(idx + 1).padStart(2, '0')} · ${section.title}`;

  return (
    <Page size="A4" style={s.page}>
      <Header section={sectionLabel} total={total} current={idx + 1} />
      <Text style={s.title}>{section.title}</Text>
      {'subtitle' in section && section.subtitle && (
        <Text style={s.subtitle}>{section.subtitle}</Text>
      )}
      {'intro' in section && section.intro && (
        <Text style={s.subtitle}>{section.intro}</Text>
      )}

      {section.layout === 'toc' && (
        <View>
          {section.entries.map((e) => (
            <View style={s.tocRow} key={e.num}>
              <Text style={s.tocNum}>{String(e.num).padStart(2, '0')}</Text>
              <Text style={s.tocLabel}>{e.label}</Text>
            </View>
          ))}
        </View>
      )}

      {section.layout === 'letter' && (
        <View>
          {section.paragraphs.map((p, i) => (
            <Text key={i} style={s.letterParagraph}>{p}</Text>
          ))}
          <Text style={s.letterSign}>{section.signature}</Text>
        </View>
      )}

      {section.layout === 'profile' && (
        <View>
          {section.rows.map((r, i) => (
            <View key={i} style={s.profileRow}>
              <Text style={s.profileLabel}>{r.label}</Text>
              <Text style={s.profileValue}>{r.value}</Text>
            </View>
          ))}
        </View>
      )}

      {section.layout === 'standard' && (
        <View>
          {section.paragraphs.map((p, i) => (
            <Text key={i} style={s.paragraph}>{p}</Text>
          ))}
        </View>
      )}

      {section.layout === 'bullets' && (
        <View>
          {section.bullets.map((b, i) => (
            <View key={i} style={s.bullet}>
              <Text style={s.bulletDot}>›</Text>
              <Text style={s.bulletText}>{b}</Text>
            </View>
          ))}
        </View>
      )}

      {section.layout === 'items' && (
        <View>
          {section.items.map((it, i) => (
            <View key={i} style={s.item}>
              {it.period && <Text style={s.itemPeriod}>{it.period}</Text>}
              <Text style={s.itemTitle}>{it.title}</Text>
              <Text style={s.itemDesc}>{it.description}</Text>
              {it.tags && (
                <View style={s.tagRow}>
                  {it.tags.map((t, j) => (
                    <Text key={j} style={s.tag}>{t}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {section.layout === 'skillBars' && (
        <View>
          {section.skills.map((sk, i) => (
            <View key={i} style={s.skillRow}>
              <View style={s.skillHeader}>
                <Text style={s.skillName}>{sk.name}</Text>
                <Text style={s.skillLevel}>{sk.level}%</Text>
              </View>
              <View style={s.skillBarTrack}>
                <View style={[s.skillBarFill, { width: `${sk.level}%` }]} />
              </View>
              {sk.note && <Text style={s.skillNote}>{sk.note}</Text>}
            </View>
          ))}
        </View>
      )}

      {section.layout === 'quote' && (
        <View>
          <View style={s.quoteBox}>
            <Text style={s.quoteText}>"{section.quote}"</Text>
            <Text style={s.quoteAuthor}>— {section.author}</Text>
          </View>
          {section.paragraphs.map((p, i) => (
            <Text key={i} style={s.paragraph}>{p}</Text>
          ))}
        </View>
      )}

      {section.layout === 'twoColumn' && (
        <View style={s.twoCol}>
          <View style={s.col}>
            <Text style={s.colHeading}>{section.left.heading}</Text>
            {section.left.bullets.map((b, i) => (
              <View key={i} style={s.bullet}>
                <Text style={s.bulletDot}>›</Text>
                <Text style={s.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
          <View style={s.col}>
            <Text style={s.colHeading}>{section.right.heading}</Text>
            {section.right.bullets.map((b, i) => (
              <View key={i} style={s.bullet}>
                <Text style={s.bulletDot}>›</Text>
                <Text style={s.bulletText}>{b}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <Footer />
    </Page>
  );
}

export default function CVDocument() {
  return (
    <Document
      title={`CV — ${profile.name}`}
      author={profile.name}
      subject="Curriculum Vitae"
      keywords="cv, portafolio, desarrollador, full stack, react, node"
    >
      {cvSections.map((section, idx) => (
        <SectionPage
          key={section.id}
          section={section}
          idx={idx}
          total={cvSections.length}
        />
      ))}
    </Document>
  );
}
