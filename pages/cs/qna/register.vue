<template>
  <div>
    <form @submit.prevent="validateForm(index)">
      <div class="container py-16">
        <dl class="dl_form dl_qna_register">
          <dt>이름<span class="color-primary">*</span></dt>
          <dd>
            <QsFormGroup name="name"
                         v-model="inputData.fullName"
                         v-validate="'required'"
            />
          </dd>
          <dt>이메일<span class="color-primary">*</span></dt>
          <dd>
            <QsFormGroup name="email"
                         type="email"
                         v-model="inputData.email"
                         v-validate="'required'"
            />
          </dd>
          <dt>상담분류<span class="color-primary">*</span></dt>
          <dd>
            <QsDropdown placeholder="선택 안 함"/>
          </dd>
          <dt>제목<span class="color-primary">*</span></dt>
          <dd>
            <QsFormGroup name="title"
                         v-model="inputData.title"
                         v-validate="'required'"
            />
          </dd>
          <dt>문의내용<span class="color-primary">*</span></dt>
          <dd>
            <QsTextarea name="content"
                        placeholder="문의내용을 입력하세요."
                        v-model="inputData.content"
                        :rows="6"
                        v-validate="'required'"
            />
            <div class="group_img row gx-4 mt-16">
              <div class="col-4">
                <button type="button" class="btn _item _add"><i class="icon-qs-plus"></i></button>
              </div>
              <div class="col-4" v-for="n in 2">
                <div class="_item" :style="`backgroundImage: url('/sample/menu.jpg')`">
                  <button type="button" class="btn btn_delete"><i class="icon-qs-close"></i></button>
                </div>
              </div>
            </div>
          </dd>
        </dl>
      </div>

      <div class="policy_area">
        <div class="container">
          <div class="d-flex py-16" :class="{ 'active': isPolicyActive }"
               @click="() => { isPolicyActive = !isPolicyActive }">
            <h3 class="_tit">개인정보 수집 및 이용 동의 약관</h3>
            <i class="arr_rotate icon-qs-down ml-auto"></i>
          </div>
          <transition name="collapse">
            <div class="pb-16" v-show="isPolicyActive" style="max-height: 230px;">
              <div class="policy_box">
                <b>제 1조 (목적)</b><br><br>

                이 약관은 주식회사 에이아트(이하 “회사”라 합니다)이 제공하는 에이아트 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의
                권리, 의무 및 기타 필요한 사항을
                이 약관은 주식회사 에이아트(이하 “회사”라 합니다)이 제공하는 에이아트 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의
                권리, 의무 및 기타 필요한 사항을
                이 약관은 주식회사 에이아트(이하 “회사”라 합니다)이 제공하는 에이아트 서비스(이하 “서비스”라 합니다)와 관련하여, 회사와 이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의
                권리, 의무 및 기타 필요한 사항을
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="container py-20">
        <div class="d-flex justify-content-center">
          <QsCheckbox v-model="inputData.policy"
                      label="개인정보 수집 및 이용 동의"
          />
        </div>
        <div class="mt-20">
          <button type="submit" class="btn btn-primary">작성 완료</button>
        </div>
      </div>
    </form>
    <QsNotify v-model="isCompleted" @close="redirect" text="문의가 등록되었습니다."/>
  </div>
</template>

<script>
import QsFormGroup from '~/components/ui/QsFormGroup'
import QsCheckbox from '~/components/ui/QsCheckbox'
import QsNotify from '~/components/ui/QsNotify'
import QsDropdown from '~/components/ui/QsDropdown'
import QsTextarea from '~/components/ui/QsTextarea'

export default {
  components: {
    QsFormGroup,
    QsCheckbox,
    QsNotify,
    QsDropdown,
    QsTextarea
  },
  data () {
    return {
      inputData: {
        fullName: '',
        email: '',
        title: '',
        content: '',
        policy: false
      },
      isCompleted: false,
      isPolicyActive: false
    }
  },
  methods: {
    register () {
      this.isCompleted = true
    },
    redirect () {
      this.$router.push({name: 'cs-qna-register'})
    }
  }
}
</script>

<style lang="scss" scoped>
.dl_qna_register {
  dt {
    font-size: 14px;
    letter-spacing: -.5px;
    font-weight: $font-weight-bold;
  }

  dd {
    margin-left: 90px;
    margin-bottom: 16px;
  }
}

.group_img {
  ._item {
    position: relative;
    width: 100%;
    padding: 0 0 100%;
    border-radius: $border-radius;
    border: solid 1px #d5d4e1;
    background-position: center;
    background-size: cover;

    &._add > i {
      position: absolute;
      top: calc(50% - 8px);
      left: calc(50% - 8px);

      &:before {
        font-size: 16px;
      }
    }
  }

  .btn_delete {
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
    border: none;
    font-size: 10px;
    color: $white;

    i:before {
      display: block;
    }
  }
}

.qna_register_policy {
  ._tit {
    font-size: 14px;
    color: #999dad;
  }
}

.policy_area {
  background-color: $gray-100;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  ._tit {
    font-size: 14px;
    color: $body-color;
  }

  .policy_box {
    font-size: 10px;
    color: $body-color;
    max-height: 75px;
    overflow-y: auto;
  }

  ._txt {
    font-size: 14px;
    letter-spacing: -.5px;
    color: $body-color;
  }
}
</style>
