import { registerFonts } from "./register-fonts";
registerFonts();
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

import { projects } from "../../../data/projects";
import { workExperience } from "../../../data/workExperience";
import { companyData, CompanyData } from "../../../data/companyData";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Open Sans",
    fontSize: 12,
    padding: 28,
    backgroundColor: "#ffffff",
    color: "#1f2937",
  },
  name: {
    fontFamily: "Open Bold",
    letterSpacing: 1,
    fontSize: 35,
    marginBottom: -10,
    color: "#20124D",
  },
  title: {
    fontFamily: "Open Bold",
    letterSpacing: 1,
    fontSize: 17,
    marginBottom: 6,
    color: "#20124D",
  },
  contact: {
    fontSize: 10,
    marginBottom: 6,
    color: "#323b4c",
  },
  section: {
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontFamily: "Open Bold",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#20124D",
  },
  text: {
    fontSize: 11,
    textAlign: "justify",
    color: "#323b4c",
  },
  projectTitle: {
    fontFamily: "Open Bold",
    fontSize: 12,
    fontWeight: "bold",
    color: "#323b4c",
  },
  projectTech: {
    fontFamily: "Open Italic",
    fontSize: 11,
    marginBottom: 3,
    marginTop: 2,
    textAlign: "justify",
    color: "#323b4c",
  },
  link: {
    fontSize: 10,
    color: "#20124D",
    textDecoration: "underline",
    marginBottom: 2,
  },
  linkAbout: {
    fontSize: 13,
    color: "#20124D",
    textDecoration: "underline",
  },
  listItem: {
    fontSize: 12,
    color: "#323b4c",
  },
  about: {
    fontSize: 13,
    textAlign: "justify",
    color: "#323b4c",
  },
});

interface PDFRendererProps {
  nameOfTheCompany: string | null;
}

export const ResumePDF = ({ nameOfTheCompany }: PDFRendererProps) => {
  if (!nameOfTheCompany) return null;

  const company: CompanyData | undefined = companyData[nameOfTheCompany];
  if (!company) return null;

  return (
    <Document title={`cv-jiri-vecko-${nameOfTheCompany}.pdf`}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>Jiří Vecko</Text>
        <Text style={styles.title}>{company.profession}</Text>
        <Text style={styles.contact}>
          +420 721 665 444 | veckoj@seznam.cz |{" "}
          <Link src="https://www.jirivecko.cz" style={styles.link}>
            jirivecko.cz
          </Link>{" "}
          |{" "}
          <Link src="https://linkedin.com/in/jiri-vecko" style={styles.link}>
            linkedin.com/in/jiri-vecko
          </Link>{" "}
          |{" "}
          <Link src="https://github.com/jirkha" style={styles.link}>
            github.com/jirkha
          </Link>
        </Text>

        <View style={styles.section}>
          <Text style={{ ...styles.about, marginTop: -8 }}>
            {company.about}
            <Link src={company.companyLink} style={styles.linkAbout}>
              {company.name}
            </Link>
            .
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technologie</Text>
          <View>
            {(
              Object.keys(
                company.techStack
              ) as (keyof typeof company.techStack)[]
            ).map((key) => (
              <Text key={key} style={styles.text}>
                {`•   ${company.techStack[key].join(", ")}`}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projekty</Text>
          {projects.map((project) => {
            const techKey = project.name.includes("J&P")
              ? "jp"
              : project.name.includes("SUMA")
              ? "suma"
              : project.name.includes("DIV")
              ? "div"
              : null;

            const techList = techKey ? company.projectTech[techKey] : [];

            return (
              <View key={project.name} style={{ marginBottom: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginBottom: 2,
                  }}
                >
                  <Text style={styles.projectTitle}>{project.name}</Text>
                  {project.demo && (
                    <>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#323b4c",
                          marginLeft: 8,
                        }}
                      >
                        {"|"}
                      </Text>
                      <Link
                        src={project.demo}
                        style={[
                          styles.link,
                          { marginLeft: 8, marginBottom: 0 },
                        ]}
                      >
                        {project.demo.replace("https://", "")}
                      </Link>
                    </>
                  )}
                </View>
                <Text style={styles.text}>{project.description}</Text>
                <Text style={styles.projectTech}>{techList.join(", ")}</Text>
                <Link src={project.code} style={styles.link}>
                  {project.code.replace("https://", "")}
                </Link>
              </View>
            );
          })}
        </View>

        <View style={{ ...styles.section, marginTop: -6 }}>
          <Text style={{ ...styles.sectionTitle, marginBottom: -8 }}>
            Pracovní zkušenosti
          </Text>
          {workExperience.map((job) => (
            <View key={job.position}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginTop: 16,
                }}
              >
                <Text style={styles.projectTitle}>
                  {job.years} | {job.position}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#323b4c",
                    marginHorizontal: 4,
                  }}
                >
                  {"|"}
                </Text>
                <Text style={styles.text}>{job.company}</Text>
              </View>
              {job.description && (
                <Text style={styles.text}>{job.description}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vzdělání</Text>
          <Text style={styles.projectTitle}>
            2016–2019 | České vysoké učení technické v Praze, Fakulta dopravní
          </Text>
          <Text style={styles.text}>
            Obor Technika a technologie v dopravě a spojích, titul Bc.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jazykové dovednosti</Text>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.listItem}>
              <Text style={{ fontFamily: "Open Bold" }}>Čeština</Text>
              <Text>{" – rodilý mluvčí"}</Text>
            </Text>
            <Text style={styles.listItem}>
              <Text style={{ fontFamily: "Open Bold" }}>Angličtina</Text>
              <Text>{" – B2"}</Text>
            </Text>
            <Text style={styles.listItem}>
              <Text style={{ fontFamily: "Open Bold" }}>Němčina</Text>
              <Text>{" – A2"}</Text>
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
