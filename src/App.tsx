import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { alpha, styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { TreeItemProps, treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
// web.cjs is required for IE11 support
import { useSpring, animated } from "react-spring";
import { TransitionProps } from "@mui/material/transitions";

import { Box } from "@mui/material";
const Department_list = [
  {
    dept_desc: "department 1",
    id: Math.random(),
    branch: [
      {
        branch_desc: "branch 1",
        id: Math.random(),
        class: [
          {
            class_desc: "s",
            id: Math.random(),
            semester: [
              {
                sem_desc: "semester1",
                id: "Sem1",
                section: [
                  { section_desc: "Section1", id: "section1" },
                  { section_desc: "section2", id: "section2" },
                ],
              },
              {
                sem_desc: "semester1",
                id: "Sem1",
                section: [
                  { section_desc: "Section1", id: "section12" },
                  { section_desc: "section2", id: "section222" },
                ],
              },
            ],
          },
          { class_desc: "urygiuwe", id: Math.random() },
        ],
      },
      { branch_desc: "branch2", id: Math.random() },
    ],
  },
  {
    dept_desc: "sd",
    branch: [
      {
        branch_desc: "ss",
        id: Math.random(),
        class: [
          {
            class_desc: "ph",
            id: Math.random(),
            sem: [
              {
                sem_desc: "ss",
                id: "Ss",
                section: [
                  { section_desc: "Ss", id: "sss" },
                  { section_desc: "ssw", id: "sss" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

interface Props {
  id?: string;
}
function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

interface Props {
  id?: string;
}

const hiddenString = "juui";
console.log(Department_list, "list");
export default function CustomizedTreeView({ id }: Props) {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        : []
    );
  };
  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };
  console.log(Department_list);
  return (
    <Box className="tree-view">
      <Box sx={{ mb: 1 }}>
        <button onClick={handleExpandClick}>
          {expanded.length === 0 ? "Expand all" : "Collapse all"}
        </button>
      </Box>
      <TreeView
        className="departmenttreeview"
        aria-label="controlled"
        // defaultExpanded={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
        expanded={expanded}
        onNodeToggle={handleToggle}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
      >
        <StyledTreeItem nodeId="1" label="Departments">
          {Department_list.map((department: any, index: React.Key) => {
            return (
              <React.Fragment key={index}>
                {department.dept_desc.search(hiddenString) === 0 ? null : (
                  <StyledTreeItem nodeId="2" label={department.dept_desc}>
                    {department.branch.map((branch: any, index: React.Key) => {
                      return (
                        <React.Fragment key={index}>
                          <StyledTreeItem nodeId="3" label="Branches">
                            <StyledTreeItem
                              nodeId="4"
                              label={branch.branch_desc}
                            ></StyledTreeItem>
                          </StyledTreeItem>
                        </React.Fragment>
                      );
                    })}
                  </StyledTreeItem>
                )}
              </React.Fragment>
            );
          })}
        </StyledTreeItem>
      </TreeView>
    </Box>
  );
}
