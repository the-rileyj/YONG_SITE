var v = new Vue({
    el: '#app',
    data: function() {
        return {
            images: true,
            teachers: [
                {name: "Dr. Yong Wang", courseTitle: "INFA792 Special Topic Cybersecurity for Advanced Cyberinfrastructure", courseDescription: "This course discusses cybersecurity issues in advanced cyberinfrastructure, especially cybersecurity issues in advanced cyberinfrastructure for science, engineering, and public policy. The course includes four topics: introduction to advanced scientific cyberinfrastructure, cybersecurity issues in advanced scientific cyberinfrastructure, identity and access control, compliance issues.", infoLink: "http://dsu.edu/about-dsu/directory/yong-wang", image: "./static/img/wang-yong.jpg"},
                {name: "Dr. Sulabh Bhattarai", courseTitle: "INFA792 Special Topic Web Security", courseDescription: "This course will make use of hands-on exercises in compiled and web-based software to illustrate attack methodologies and techniques that lead to software vulnerabilities that violate fundamental security principles. Attacks and mitigation strategies related to filter evasion, session management, database interaction, path traversal, and file inclusion will be emphasized. Some concepts on network security will be covered.", infoLink: "http://dsu.edu/about-dsu/directory/sulabh-bhattarai", image: "./static/img/bhattarai-sulabh.jpg"},
                {name: "Dr. Jason Nikolai", courseTitle: "INFA792 Special Topic Cloud Security", courseDescription: "This course examines cloud computing and security topics based on sound architecture design and best practices applied in modern cloud computing environments.  It includes four topic areas, i.e., cloud infrastructure, cloud security, cloud platforms, and cloud management. At the end of this course, students will be knowledgeable in cloud computing security from both the cloud provider and cloud tenant perspective, including: architecture models, compliance, privacy, data protection, security engineering, secure deployment, risk management, and operational security.", infoLink: "", image: "./static/img/nikolai-jason.jpg"}
            ]
        }
    },
    methods: {

    },
    mounted: function() {

    }
});